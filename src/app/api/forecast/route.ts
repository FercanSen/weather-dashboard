export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");
  const unit = searchParams.get("unit") || "metric";

  if (!city) {
    return new Response(JSON.stringify({ error: "City is required." }), {
      status: 400,
    });
  }

  try {
    const apiKey = process.env.WEATHER_API_KEY;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        return new Response(JSON.stringify({ error: "City not found." }), {
          status: 404,
        });
      }
      return new Response(
        JSON.stringify({ error: "Forecast service unavailable." }),
        {
          status: response.status,
        }
      );
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch forecast." }),
      { status: 500 }
    );
  }
}
