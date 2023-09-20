-- Create a view to show previous month average price
-- and normal price limits
CREATE view public.previous_month_average AS
SELECT keskihinta,
    yläräjä,
    alaraja
FROM average_by_year_and_month
WHERE vuosi = EXTRACT (year FROM NOW()) AND
    kuukausi = EXTRACT (month FROM NOW()) - 1