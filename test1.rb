require 'mongoid'

class Event
  include Mongoid::Document

  field :name, type:String
  field :description, type:String
  field :address, type:String
  field :date, type:Date
  field :time, type:Time

end
