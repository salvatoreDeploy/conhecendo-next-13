interface ProductsProps {
  params: {
    id: string;
  };
}

/* metadatas com title dinamico */

export async function generateMetadata({ params }: ProductsProps) {
  return {
    title: `Produto - ${params.id}`,
  };
}

export default function Products({ params }: ProductsProps) {
  return <p>Products: ID {params.id}</p>;
}
