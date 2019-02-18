#!/bin/bash

arr=("tn_bank" "tn_bank_custom" "tn_generic" "tn_generic_nf" "tn_generic_nbf" "tn_generic_nbf" "prod_sales_value" "tn_prod_sales_value" "prod_sales_pct_inc" "tn_prod_sales_pct_inc" "shp_full_pattern" "tn_shp_full_pattern" "shp_equity_trend" "tn_shp_equity_trend" "tt_prom" "tn_promoters" "tt_top" "tn_top_shareholders" "tt_dir" "tn_director" "dir_composition" "tn_director_composition" "dir_rem1" "tn_director_remuneration" "dir_rem2" "tn_director_remuneration_trend" "tn_nf_summary" "tn_generic_nf_summary")

for i in "${arr[@]}"
do
    echo $i
    wget "https://truenorth.cmie.com/kommon/bin/sr.php?kall=wshreport&format=json&template=$i&cocode=72607" -O $i.json
done