import { ButtonTheme } from "../enums/button-theme";
import styles from '../button.css'

export const ThemeStyles: Record<ButtonTheme, string> = {
  [ButtonTheme.Primary]: styles.primary,
  [ButtonTheme.Secondary]: styles.secondary,
}
