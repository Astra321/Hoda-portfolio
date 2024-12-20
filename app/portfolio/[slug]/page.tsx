import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

const PortfolioPage = ({ data }) => {
  const router = useRouter();
  
  // Show loading state if the page is being generated
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

// Fetch data for the specific slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await fetchData(params.slug); // Replace with actual data fetching logic
  return {
    props: {
      data,
    },
  };
};

// Generate paths for static pages
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await fetchAllSlugs(); // Replace with actual logic to fetch all slugs
  return {
    paths,
    fallback: true, // or false, depending on your requirements
  };
};

// Generate static parameters for the slugs
export const generateStaticParams = async () => {
  const paths = await fetchAllSlugs(); // Replace with actual logic to fetch all slugs
  return paths.map(slug => ({ slug }));
};

export default PortfolioPage;
