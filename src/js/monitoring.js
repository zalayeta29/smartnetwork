/**
 * SmartNetwork TJKT - Live Network Monitoring Simulation Module
 */

export function initMonitoringSection() {
  const canvas = document.getElementById('monitoring-canvas');
  const pingVal = document.getElementById('metric-ping');
  const dlVal = document.getElementById('metric-download');
  const ulVal = document.getElementById('metric-upload');
  const lossVal = document.getElementById('metric-loss');
  const stressBtn = document.getElementById('btn-stress-test');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let dataPoints = Array(30).fill(15);
  let isSimulating = true;
  let timerId = null;

  // Fit canvas width
  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 180;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  function drawChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const width = canvas.width;
    const height = canvas.height;
    const step = width / (dataPoints.length - 1);

    // Draw background grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let y = 0; y <= height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw area gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(0, 240, 255, 0.35)');
    gradient.addColorStop(1, 'rgba(0, 82, 255, 0.0)');

    ctx.beginPath();
    ctx.moveTo(0, height);

    dataPoints.forEach((val, i) => {
      const x = i * step;
      const y = height - (val / 100) * (height - 20) - 10;
      if (i === 0) ctx.lineTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw line
    ctx.beginPath();
    dataPoints.forEach((val, i) => {
      const x = i * step;
      const y = height - (val / 100) * (height - 20) - 10;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Draw glowing current point
    const lastX = width;
    const lastY = height - (dataPoints[dataPoints.length - 1] / 100) * (height - 20) - 10;
    ctx.beginPath();
    ctx.arc(lastX - 4, lastY, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#00f0ff';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  function updateMetrics() {
    if (!isSimulating) return;

    // Generate natural latency noise
    const baseLatency = Math.floor(12 + Math.random() * 8);
    const downloadMbps = Math.floor(750 + Math.random() * 200);
    const uploadMbps = Math.floor(380 + Math.random() * 100);

    if (pingVal) pingVal.textContent = `${baseLatency} ms`;
    if (dlVal) dlVal.textContent = `${downloadMbps} Mbps`;
    if (ulVal) ulVal.textContent = `${uploadMbps} Mbps`;
    if (lossVal) lossVal.textContent = '0.00 %';

    // Map download speed to graph percentage (0-100)
    const graphVal = Math.min(100, Math.max(10, (downloadMbps / 1000) * 80));
    dataPoints.shift();
    dataPoints.push(graphVal);

    drawChart();
  }

  timerId = setInterval(updateMetrics, 1000);
  drawChart();

  if (stressBtn) {
    stressBtn.addEventListener('click', () => {
      stressBtn.disabled = true;
      stressBtn.textContent = '⚡ Running Traffic Stress Test...';
      
      let count = 0;
      const stressInterval = setInterval(() => {
        const spikeVal = Math.floor(85 + Math.random() * 15);
        const spikePing = Math.floor(45 + Math.random() * 30);
        dataPoints.shift();
        dataPoints.push(spikeVal);
        if (pingVal) pingVal.textContent = `${spikePing} ms`;
        if (dlVal) dlVal.textContent = `980 Mbps (MAX)`;
        drawChart();

        count++;
        if (count >= 5) {
          clearInterval(stressInterval);
          stressBtn.disabled = false;
          stressBtn.textContent = '🚀 Test Spike Traffic';
        }
      }, 500);
    });
  }
}
