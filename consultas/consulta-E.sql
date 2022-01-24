SELECT p."product_id", p."product_name", stk."quantity" FROM "products" p
INNER JOIN "stocks" stk
ON p."product_id" = stk."product_id"
INNER JOIN "categories" c
ON p."category_id" = c."category_id"
INNER JOIN "stores" s
ON stk."store_id" = s."store_id"
WHERE s."store_name" = 'Santa Cruz Bikes' AND c."category_name" = 'Electric Bikes'
ORDER BY p."product_name" ASC;