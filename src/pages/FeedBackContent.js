import React from 'react';
import { Card, CardContent, Avatar, Typography, Grid } from '@mui/material';

const feedbacks = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Company A',
    feedback: 'This is an amazing service! Highly recommend to others.',
    avatar: '/path/to/avatar1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO, Company B',
    feedback: 'Great experience, very satisfied with the results!',
    avatar: '/path/to/avatar2.jpg',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    role: 'Manager, Company C',
    feedback: 'Very professional and efficient service.',
    avatar: '/path/to/avatar3.jpg',
  },
];

const FeedbackCard = ({ name, role, feedback, avatar }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Grid container spacing={2}>
        <Grid item>
          <Avatar alt={name} src={avatar} />
        </Grid>
        <Grid item xs>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {role}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            "{feedback}"
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const FeedBackContent = () => (
  <div>
    <Typography variant="h5" gutterBottom>
      Client Feedback
    </Typography>
    {feedbacks.map(feedback => (
      <FeedbackCard key={feedback.id} {...feedback} />
    ))}
  </div>
);

export default FeedBackContent;
