type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </>
  );
};
