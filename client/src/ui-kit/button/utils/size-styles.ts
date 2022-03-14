import { ButtonSize } from "../enums/button-size";
import styles from '../button.css'

export const SizeStyles: Record<ButtonSize, string> = {
  [ButtonSize.M]: styles.medium,
  [ButtonSize.L]: styles.large,
}
