SELECT c."category_id", c."category_name", COUNT(p."product_id") as "COUNT(*)" from "products" p
INNER JOIN "categories" c
ON p."category_id"=c."category_id"
GROUP BY c."category_id"
ORDER BY "COUNT(*)" DESC;