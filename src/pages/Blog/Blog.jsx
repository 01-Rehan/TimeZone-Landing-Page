import React from "react";
import { blogPosts } from "./BlogPosts";
import { useState } from 'react';
import { Clock, Calendar, Award, TrendingUp, User, ArrowRight, Search } from 'lucide-react';

export const Blog = () => {

   const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles', icon: Clock },
    { id: 'heritage', name: 'Heritage', icon: Award },
    { id: 'investment', name: 'Investment', icon: TrendingUp },
    { id: 'craftsmanship', name: 'Craftsmanship', icon: Calendar },
    { id: 'trends', name: 'Trends', icon: ArrowRight }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);



  return (
    <>
    <section className="text-center py-10">
      <h1 className="text-4xl text-white font-bold mb-4">
        The TimeZone Journal
      </h1>
      <p className="text-gray-400 text-lg max-w-xl mx-auto px-2">
        Explore insights, stories, and guides from the world of luxury
        timekeeping.
      </p>
    </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Featured Article */}
        {featuredPost && (
          <section className="mb-16">
            <div className="relative overflow-hidden w-full rounded-2xl bg-gradient-to-r from-red-500/40 to-75% border ">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 bg-black text-white text-sm font-medium rounded-full border border-amber-500/30">
                      Featured
                    </span>
                    <span className="text-white text-sm">{featuredPost.category}</span>
                  </div>
                  
                  <h2 className="text-4xl text-white font-bold leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-white text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-5 sm:gap-4">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-white" />
                      <span className="text-white">{featuredPost.author}</span>
                      <span className="text-white">•</span>
                      <span className="text-white">{featuredPost.date}</span>
                      <span className="text-white">•</span>
                      <span className="text-white">{featuredPost.readTime}</span>
                    </div>
                    
                    <button className="flex items-center space-x-2 bg-black text-white hover:bg-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-max sm:h-90 object-cover rounded-xl"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div> */}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Categories Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? ' text-white border-b border-red-600'
                      : ' text-white transition-all hover:border-b hover:border-white'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Articles Grid */}
        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-slate-800/30 border border-amber-900/20 rounded-xl overflow-hidden  transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-amber-100 group-hover: transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-white text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-amber-900/20">
                    <div className="flex items-center space-x-2 text-xs text-white">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-xs text-white">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 bg-transparent border  text-white py-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300 font-medium">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <Clock className="w-16 h-16 text-white mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-white">Try adjusting your search or category filter</p>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20 bg-gradient-to-r from-black to-red-600/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-amber-100 mb-4">Stay Updated</h3>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on luxury timepieces, market trends, and horological excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-black border border-white rounded-lg text-amber-100"
            />
            <button className="bg-white hover:bg-red-600/70 text-black hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>

    </>
  );
};
