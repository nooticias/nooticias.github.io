module Jekyll
    class EnvironmentVariablesGenerator < Generator
        def generate(site)
            site.config['url'] = ENV['JEKYLL_SITE_URL'] || 'http://127.0.0.1:4000'
        end
    end
end
