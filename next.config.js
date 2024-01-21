const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@sentry/profiling-node'],
  },
  sentry: {
    tunnelRoute: '/oops',
    hideSourceMaps: true,
    widenClientFileUpload: true,
    disableLogger: true,
    transpileClientSDK: false
  }
};

const sentryWebpackPluginOptions = {
  org: 'foo',
  project: 'bar',
  silent: true
};

module.exports = (phase, defaultConfig) => {
  const plugins = [
    ((config) => withSentryConfig(config, sentryWebpackPluginOptions))
  ].filter(Boolean);

  return plugins.reduce(
    (acc, plugin) => {
      const update = plugin(acc);
      return typeof update === 'function' ? update(phase, defaultConfig) : update;
    },
    { ...nextConfig }
  );
};
