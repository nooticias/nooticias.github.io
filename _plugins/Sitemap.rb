require 'fileutils'

module Jekyll
    class JekyllSitemap < Jekyll::Generator
        safe true
        priority :lowest

        def generate(site)
            @site = site
            @site.keep_files ||= []

            if not @site.config["sitemap"]["posts_per_page"] then
                @site.config["sitemap"] = Hash[
                    "posts_per_page" => 250
                ]
            end

            postsPerPage  = @site.config["sitemap"]["posts_per_page"]
            totalPosts    = @site.posts.docs.size
            totalSitemaps = ((totalPosts / postsPerPage) + 1).to_i

            for i in (1..totalSitemaps)
                if i == 1 then
                    @site.config["sitemap_posts"] = @site.posts.docs[0, postsPerPage]
                else
                    @site.config["sitemap_posts"] = @site.posts.docs[((i - 1) * postsPerPage) + 1, postsPerPage]
                end

                path     = "sitemap"
                filename = "sitemap-posts#{i}.xml"

                write(Jekyll.sanitized_path(@site.dest + File::SEPARATOR + path, filename))

                @site.keep_files << path + File::SEPARATOR + filename
            end
        end

        def write(destination_path)
            FileUtils.mkdir_p File.dirname(destination_path)
            File.open(destination_path, 'w') { |f| f.write(sitemap_content) }
        end

        def sitemap_content
            site_map = Page.new(@site, File.dirname(__FILE__), "", "sitemap.xml")
            site_map.render({}, @site.site_payload)
            site_map.output
        end
    end
end
