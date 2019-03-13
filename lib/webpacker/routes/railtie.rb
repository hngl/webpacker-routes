module Webpacker
  module Routes
    class Engine < ::Rails::Engine
      config.after_initialize do |app|
        generate = -> { Webpacker::Routes.generate(app.tap(&:reload_routes!).routes) }
        app.reloader.to_run(&generate)
        generate.call unless ENV['WEBPACKER_ROUTES_INSTALL'] == 'true'
      end
    end
  end
end
