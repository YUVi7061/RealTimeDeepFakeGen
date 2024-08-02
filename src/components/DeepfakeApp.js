import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Button, CircularProgress, Box, TextField } from '@mui/material';
import WebcamComponent from './WebcamComponent';
import VideoPlayer from './VideoPlayer';
import DeepfakePreview from './DeepfakePreview';
import ThreeDPoints from './ThreeDPoints';
import './DeepfakeApp.css'; // Ensure this path is correct

const DeepfakeApp = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [liveVideo, setLiveVideo] = useState(null);
  const [deepfakeVideo, setDeepfakeVideo] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleModelSelect = (event) => {
    setSelectedModel(event.target.files[0]);
  };

  const handleLiveInput = async () => {
    if (!selectedModel) {
      alert("Please select a model/image first.");
      return;
    }

    setIsProcessing(true);

    try {
      const response = await fetch('/process', {
        method: 'POST',
        body: JSON.stringify({ model: selectedModel }), // Adjust request as needed
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (data.videoUrl) {
        setLiveVideo(data.liveVideoUrl);
        setDeepfakeVideo(data.videoUrl);
      }
    } catch (error) {
      console.error('Error processing live input:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Container className="deepfake-container">
      <Typography variant="h4" gutterBottom className="title">
        Realtime Deepfake Application
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={5} className="preview-paper">
            <Typography variant="h6" gutterBottom>
              Live Camera Preview
            </Typography>
            <WebcamComponent />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={5} className="preview-paper">
            <Typography variant="h6" gutterBottom>
              3D Points Mapping
            </Typography>
            <ThreeDPoints />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={5} className="upload-paper">
            <Box mb={2}>
              <Typography variant="h6" gutterBottom>
                Select Model/Image
              </Typography>
              <TextField
                type="file"
                inputProps={{ accept: 'image/*' }}
                onChange={handleModelSelect}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLiveInput}
              disabled={isProcessing}
              className="action-button"
            >
              {isProcessing ? <CircularProgress size={24} /> : 'Start Deepfake'}
            </Button>
            {liveVideo && (
              <Box mt={2}>
                <Typography variant="h6" gutterBottom>
                  Live Deepfake Preview
                </Typography>
                <VideoPlayer videoSrc={liveVideo} />
              </Box>
            )}
            {deepfakeVideo && (
              <Box mt={2}>
                <Typography variant="h6" gutterBottom>
                  Deepfake Result
                </Typography>
                <DeepfakePreview videoSrc={deepfakeVideo} />
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DeepfakeApp;
