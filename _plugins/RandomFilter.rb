module Jekyll
    module RandomFilter
        # Return a random number given the max size of posts
        #
        # Currently I added to the calc a max size of posts minus twenty five
        # to allow show with guarantee at least twenty five entries.
        def random(input)
            return rand(0..(input - 25))
        end
    end
end

Liquid::Template.register_filter(Jekyll::RandomFilter)
