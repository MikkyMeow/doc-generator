import { Paper as MuiPaper } from '@mui/material'
import styles from './Paper.module.css'
import { FC, ReactNode } from 'react'

interface IProps {
    children: ReactNode
    padding?: number;
}

export const Paper: FC<IProps> = ({ children, padding = 10 }) => {
    return (
        <MuiPaper className={styles.root} style={{ padding: `${padding}mm` }}>
            {children}
        </MuiPaper>
    )
}