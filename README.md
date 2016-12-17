# Nootícias

This project was migrated from PHP Symfony2 to Jekyll 3.3.

To install this project you will need meet the requirements of this tool. To see more details you can see the documentation of Jekyll.

Well, to compile the website you need run the following command in your terminal:

```shell
$ cd path-to-this-project/
$ npm install
$ bower install
$ bundle install
$ grunt # or grunt production to generate a final website
```

## Deps

### Installing Ruby

```shell
$ wget http://ftp.ruby-lang.org/pub/ruby/2.3/ruby-2.3.1.tar.gz
$ tar -xzvf ruby-2.3.1.tar.gz
$ cd ruby-2.3.1/
$ ./configure
$ make
$ sudo make install
$ ruby -v
```

### Installing RubyGems

```shell
$ wget https://rubygems.org/rubygems/rubygems-2.6.7.zip
$ unzip rubygems-2.6.7.zip
$ cd rubygems-2.6.7/
$ ruby setup.rb
```

### Installing Jekyll

```shell
$ gem install jekyll
$ gem install bundler
```