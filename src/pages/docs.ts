import * as React from 'react';
import { navigate } from 'gatsby';
import { useLocalStorage } from 'usehooks-ts';
import { LS_SELECTED_FRAMEWORK_KEY } from '../components/screens/DocsScreen/DocsContext';
import buildPathWithFramework from '../util/build-path-with-framework';

const siteMetadata = require('../../site-metadata');

const {
  defaultFramework,
  urls: { installDocsPageSlug },
} = siteMetadata;

const DocsPage = () => {
  const [framework] = useLocalStorage(LS_SELECTED_FRAMEWORK_KEY, defaultFramework);

  if (typeof window !== 'undefined') {
    const path = buildPathWithFramework(installDocsPageSlug, framework);
    navigate(path, { replace: true });
  }

  // TODO: Render a "pure" DocsLayout to minimize flash between this route & redirect
  return null;
};

export default DocsPage;
