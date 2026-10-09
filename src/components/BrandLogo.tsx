import logo from '../photo/logo.png';

interface BrandLogoProps {
  className?: string;
}

/**
 * Логотип MAGNAT PREMIUM из src/photo/image.png с прозрачным фоном,
 * обрезанный по контенту. Натуральный размер 707×511.
 */
export default function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <img
      className={`brand-logo${className ? ` ${className}` : ''}`}
      src={logo}
      alt=""
      aria-hidden="true"
      width={707}
      height={511}
      draggable={false}
    />
  );
}
