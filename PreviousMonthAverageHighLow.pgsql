CREATE View public.previous_month_average AS
SELECT keskihinta
    yläraja,
    alaraja,
FROM average_by_year_and_month
WHERE vuosi = EXTRACT(year FROM Now()) AND
    kuukausi = EXTRACT(month FROM Now())