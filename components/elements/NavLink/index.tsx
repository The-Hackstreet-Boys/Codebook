import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { FC, ReactElement, cloneElement } from 'react';

export interface NavLinkProps extends LinkProps {
  children: ReactElement;
}

const NavLink: FC<NavLinkProps> = ({ children, href, ...props }) => {
  const { asPath: currentPath } = useRouter();

  if (currentPath === href) {
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
