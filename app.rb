require 'sinatra'
require 'json'

before do
  request.body.rewind
  @params = JSON.parse(request.body.read, :symbolize_names => true)
end

get '/people' do
  {people: ['Alice', 'Bob', 'Charles']}.to_json
end

post '/login' do
  puts "#{params[:person]} has logged in"
  {token: "blah blah", user: params[:person]}.to_json
end

set :public_folder, Proc.new { File.join(root, "public") }
set :static, true