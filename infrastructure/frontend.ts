export const web = new sst.aws.Nextjs('Web', {
  path: 'packages/frontend',
  link: [],
  environment: {},
});