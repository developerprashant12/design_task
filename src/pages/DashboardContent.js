import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Paper, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', Activity: 400 },
  { name: 'Tue', Activity: 300 },
  { name: 'Wed', Activity: 500 },
  { name: 'Thu', Activity: 200 },
  { name: 'Fri', Activity: 600 },
  { name: 'Sat', Activity: 700 },
  { name: 'Sun', Activity: 300 },
];

const DashboardContentData = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="h4">Dashboard</Typography>
          </Paper>
        </Grid>

        {/* Stats Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Sales</Typography>
              <Typography variant="h4">$5,000</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">New Users</Typography>
              <Typography variant="h4">150</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Revenue</Typography>
              <Typography variant="h4">$12,000</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Bounce Rate</Typography>
              <Typography variant="h4">30%</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={2} sx={{ padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              Recent Activity
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Activity" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardContentData;

