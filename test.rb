require "sinatra"
require "json"
require "mongo"
require File.dirname(__FILE__) + "/models/event"

configure do
  Mongoid.load!('mongoid.yml')

  # Mongoid.configure do |config|
  #   if ENV['MONGOHQ_URL']
  #     conn = Mongo::Connection.from_uri(ENV['MONGOHQ_URL'])
  #     uri = URI.parse(ENV['MONGOHQ_URL'])

  #     # problem happens here 
  #     config.master = conn.db(uri.path.gsub(/^\//, ''))
  #   else
  #     config.master = Mongo::Connection.from_uri("mongodb://localhost:27017").db('chi')
  #   end
  # end
end

get '/' do
  redirect "/index.html#/events/show"
end

get '/events' do
  events = Event.all
  events.to_json
end

post '/events/add' do 

  puts params

  @filename = params['image'][:filename]
  
  if @filename
    File.open("public/uploads/" + @filename, "w") do |file|  
      file.write(params['image'][:tempfile].read)
    end
  end

  @event = Event.new
  @event.name = params[:name]
  @event.description = params[:description]
  @event.address = params[:address]
  @event.date = params[:date]
  @event.time = params[:time]
  @event.imageUrl = @filename
  @event.website = params[:website]
  @event.phoneNumber = params[:phoneNumber]

  @event.save
  {status: "Post saved"}.to_json
end

get '/timeline/get' do
  timeline = {
    timeline: {
      headline: "Lebohang",
      type: "default",
      startDate: "2009, 1",
      text: "This is the beggining",
      date: [
        {
          startDate: "2009, 2",
          headline: "Sinatra on the go",
          text: "On and on we go",
          asset: {
            media: "",
            credit: "",
            caption: ""
          }
        }
      ]
    }
  }

  timeline.to_json
end

get '/video/get' do 
  videos = { 
    videos: [
      { url: "'http://www.youtube.com/embed/4hNYrcU5Hh4?feature=player_detailpage'" },
      { url: "'http://www.youtube.com/embed/zoKj7TdJk98?feature=player_detailpage'" }
    ]
  }
  puts videos.to_json
  videos.to_json

end

post '/video/save' do 
  # @url = params[:videoUrl]
  # videos.push getYoutubeVideoIdfromUrl(@url)
end

def getYoutubeVideoIdfromUrl(url)
  url.split('=')[1]
end

set :public_folder, Proc.new { File.join(root, "public") }
set :static, true


