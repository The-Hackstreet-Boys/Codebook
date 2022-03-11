import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactElement, cloneElement } from 'react';

export interface NavLinkProps extends LinkProps {
  children: ReactElement;
  exact?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ children, href, exact = true, ...props }) => {
  const { asPath: currentPath } = useRouter();

  if (exact ? currentPath === href : currentPath.includes(href.toString())) {
    return (
      <Link href={href} {...props}>
        {cloneElement(children, {
          className: `${children.props.className} active`,
        })}
      </Link>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
