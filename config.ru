require 'rubygems'
require 'bundler'

Bundler.require

require File.join(File.dirname(__FILE__), '/test.rb')
run Sinatra::Application