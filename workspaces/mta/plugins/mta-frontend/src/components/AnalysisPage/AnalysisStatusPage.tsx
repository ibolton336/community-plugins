import React from 'react';
import { Grid } from '@material-ui/core';
import { useFetchAppTasks } from '../../queries/mta';
import { Application, TaskDashboard } from '../../api/api';
import { InfoCard } from '@backstage/core-components';
import TaskTable from './TaskTable';

interface IAnalysisStatusPageProps {
  tasks: TaskDashboard[];
  isFetching: boolean;
}
const AnalysisStatusPage = (props: IAnalysisStatusPageProps) => {
  const { tasks, isFetching } = props;
  return (
    <Grid item xs={12} md={6}>
      <InfoCard title="Analysis Details">
        <TaskTable tasks={tasks} isFetching={isFetching} />
      </InfoCard>
    </Grid>
  );
};
export default AnalysisStatusPage;
