'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function AdminDashbard() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch banners on component mount
  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/get-banner-data');
      const result = await response.json();
      
      if (result.success) {
        setBanners(result.data);
      } else {
        setError('Failed to fetch banners');
      }
    } catch (err) {
      setError('Error loading banners');
      console.error('Error fetching banners:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            {/* <Link 
              href='/admin-dashboard'
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Admin Panel
            </Link> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Banners Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Featured Banners</h2>
            <button
              onClick={fetchBanners}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-gray-600">Loading banners...</span>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {/* No Banners State */}
          {!loading && !error && banners.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No banners found</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by adding your first banner.</p>
              <div className="mt-6">
                <Link
                  href="/admin"
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Add Banner
                </Link>
              </div>
            </div>
          )}

          {/* Banners Grid */}
          {!loading && !error && banners.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {banners.map((banner) => (
                <div
                  key={banner.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Banner Image */}
                  <div className="relative h-48 w-full">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Banner Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {banner.title}
                    </h3>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>ID: {banner.id}</span>
                      <span>
                        Added: {new Date(banner.id).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Banner Count */}
          {!loading && !error && banners.length > 0 && (
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Showing {banners.length} banner{banners.length !== 1 ? 's' : ''}
              </p>
            </div>
          )}
        </section>

        {/* Additional Content Section */}
        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Our Site</h2>
          <p className="text-gray-600 mb-4">
            This is your home page where you can view all the featured banners. 
            Use the Admin Panel to manage and add new banners.
          </p>
          <div className="flex gap-4">
            <Link
              href="/add-banner"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Manage Banners
            </Link>
            <button
              onClick={fetchBanners}
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Refresh Data
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}