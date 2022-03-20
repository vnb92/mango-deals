import React, {FC} from 'react';
import { Header } from '@/components/header'
import { MangoChart } from '@/components/mango-chart'
import { Deals } from '@/components/deals'
import { DealModal } from '@/components/deal-modal'
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
          <MangoChart />
        </section>

        <section className={styles.deals}>
          <Deals />
        </section>
      </main>
      <DealModal />
    </ViewportProvider>
  );
}
