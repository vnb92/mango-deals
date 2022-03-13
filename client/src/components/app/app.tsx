import React, {FC} from 'react';
import { Header } from '@/components/header'
import { Chart } from '@/components/chart'
import { DealList } from '@/components/deal-list'
import { ViewportProvider } from '@/context/viewport-context'
import styles from './app.css'

export const App: FC = () => {
  return (
    <ViewportProvider>
      <main className={styles.main}>
        <section className={styles.header}>
          <Header />
        </section>

        <section className={styles.chart}>
          <Chart />
        </section>

        <section className={styles.deals}>
          <DealList />
        </section>
      </main>
    </ViewportProvider>
  );
}
