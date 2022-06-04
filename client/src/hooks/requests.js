const url =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEV_URL
    : process.env.REACT_APP_PROD_URL;

async function httpGetPlanets() {
  const response = await fetch(`${url}/planets`);
  return response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${url}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
  try {
    const response = await fetch(`${url}/launches`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(launch)
    });
    return response;
  } catch (error) {
    return {
      ok: false
    };
  }
}

async function httpAbortLaunch(id) {
  try {
    return await fetch(`${url}/launches/${id}`, {
      method: 'delete'
    });
  } catch (error) {
    return {
      ok: false
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
