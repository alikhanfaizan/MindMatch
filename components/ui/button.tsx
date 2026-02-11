import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ButtonProps = PressableProps & {
  title: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  lightColor?: string;
  darkColor?: string;
  loading?: boolean;
};

export function Button({
  title,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  lightColor,
  darkColor,
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'tint');
  const textColor = useThemeColor({ light: '#fff', dark: '#fff' }, 'text');

  const sizeStyles = {
    small: styles.sizeSmall,
    medium: styles.sizeMedium,
    large: styles.sizeLarge,
  };

  const variantStyles = {
    primary: { backgroundColor },
    secondary: styles.variantSecondary,
    danger: styles.variantDanger,
    outline: styles.variantOutline,
  };

  return (
    <Pressable
      style={[
        styles.base,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
      ]}
      disabled={disabled || loading}
      {...props}
    >
      <Text style={[styles.text, { color: variant === 'outline' ? backgroundColor : textColor }]}>
        {loading ? 'Loading...' : title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  sizeSmall: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  sizeMedium: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  sizeLarge: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  variantSecondary: {
    backgroundColor: '#e5e5e5',
  },
  variantDanger: {
    backgroundColor: '#dc2626',
  },
  variantOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
  },
  disabled: {
    opacity: 0.5,
  },
});
