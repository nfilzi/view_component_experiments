module ActionView::Helpers::TagHelper
  def token_list(*args)
    tokens = build_tag_values(*args).flat_map { |value| value.to_s.split(/\s+/) }.uniq

    safe_join(tokens, " ")
  end
  alias_method :class_names, :token_list

  def build_tag_values(*args)
    tag_values = []

    args.each do |tag_value|
      case tag_value
      when Hash
        tag_value.each do |key, val|
          tag_values << key.to_s if val && key.present?
        end
      when Array
        tag_values.concat build_tag_values(*tag_value)
      else
        tag_values << tag_value.to_s if tag_value.present?
      end
    end

    tag_values
  end
end

class ViewComponent::Base
  define_method :class_names, ActionView::Helpers::TagHelper.instance_method(:class_names)

  def before_render
    build_classes
  end

  def build_classes
    @classes = class_names(setup_classes).
      split(' ').
      map { |klass| "#{class_identifier}__#{klass}" }.
      join(" ")
  end

  def class_identifier
    @class_identifier ||= virtual_path[1..-1].gsub("/", "--")
  end
end
