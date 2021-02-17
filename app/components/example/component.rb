# frozen_string_literal: true

class Example::Component < ViewComponent::Base
  with_content_areas :footer, :body

  def initialize(title:, active: true)
    @title   = title
    @active  = active
  end

  def setup_classes
    {
      active: @active
    }
  end
end
