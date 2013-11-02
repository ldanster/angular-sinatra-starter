require "sinatra"
require "json"

# videos = Array.new

get '/people' do
  peeps = { people: [ 
    {"name" => "Lebohang", "Age" => 24},
    {"name" => "Andy", "Age" => 34}
  ]}

  puts peeps
  puts peeps.to_json
  peeps.to_json
end

get '/events' do
  events = {
    events: [
      {"title" => "event no 1", "time" => "12:00PM"},
      {"title" => "event no 2", "time" => "13:00PM"},
      {"title" => "event no 3", "time" => "14:00PM"},
      {"title" => "event no 4", "time" => "15:00PM"},
      {"title" => "event no 5", "time" => "16:00PM"},
      {"title" => "event no 6", "time" => "17:00PM"},
      {"title" => "event no 7", "time" => "18:00PM"},
      {"title" => "event no 8", "time" => "19:00PM"},
      {"title" => "event no 9", "time" => "19:00PM"}
    ]
  }

  events.to_json
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

get '/' do
    puts params[]
end

def getYoutubeVideoIdfromUrl(url)
  url.split('=')[1]
end

set :public_folder, Proc.new { File.join(root, "public") }
set :static, true


