require 'mongoid'

class Video
  include Mongoid::Document

  field :name, type:String
  field :youtubeId, type:String
  field :description, type:String

end 