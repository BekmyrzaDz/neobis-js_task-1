const c = document.getElementById('canvas').getContext('2d');
c.lineWidth = 5;
c.strokeStyle = '#000';

const draw = () => {
  c.arc(200, 200, 70, 0, Math.PI, false);

  c.stroke();
};

draw();