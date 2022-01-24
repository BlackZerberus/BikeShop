SELECT b."brand_id", b."brand_name", SUM(s."quantity") as "SUM" FROM "brands" b
INNER JOIN "products" p
ON b."brand_id"=p."brand_id"
INNER JOIN "stocks" s
ON s."product_id"=p."product_id"
GROUP BY b."brand_id"
ORDER BY "SUM" DESC;

