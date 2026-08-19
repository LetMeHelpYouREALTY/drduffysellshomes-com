type Crumb = {
  name: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-primary-50 border-b border-primary-100">
      <ol className="container-wide mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-2 text-sm text-primary-600">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-primary-400">
                  /
                </span>
              )}
              {last || !item.href ? (
                <span className="font-medium text-primary-900" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <a href={item.href} className="hover:text-bhhs-maroon transition-colors">
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
