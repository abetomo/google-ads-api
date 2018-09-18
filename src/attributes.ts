const ad =  {
    id: '',
    final_urls: '',
    final_mobile_urls: '',
    tracking_url_template: '',
    url_custom_parameters: '',
    display_url: '',
    type: '',
}

const entities : { [key: string]: object } = {
    // 'ad_group': [
    //     'id',
    //     'name',
    //     'status',
    //     'type',
    //     'tracking_url_template',
    //     'url_custom_parameters',
    //     'campaign',
    //     'cpc_bid_micros',
    //     'cpm_bid_micros',
    //     'cpa_bid_micros',
    //     'cpv_bid_micros',
    //     'target_roas_override',
    //     'percent_cpc_bid_micros',
    // ],
    ad_group_ad: {
        status: '',
        ad_group: '',
        ad

        // 'status',
        // 'ad_group',
        // 'ad.id',
        // 'ad.final_urls',
        // 'ad.text_ad.headline',
        // 'ad.expanded_text_ad.headline_part1'
    },
    // 'ad_group_criterion': [
    //     'criterion_id',
    //     'status',
    //     // 'quality_info',
    //     'ad_group',
    //     'type',
    //     'negative',
    //     'cpc_bid_micros',
    //     'cpm_bid_micros',
    //     'cpv_bid_micros',
    //     'percent_cpc_bid_micros',
    //     'effective_cpc_bid_micros',
    //     'effective_cpm_bid_micros',
    //     'effective_cpv_bid_micros',
    //     'effective_percent_cpc_bid_micros',
    //     'effective_cpc_bid_source',
    //     'effective_cpm_bid_source',
    //     'effective_cpv_bid_source',
    //     'effective_percent_cpc_bid_source',
    //     // 'position_estimates',
    //     'final_urls',
    //     'tracking_url_template',
    //     'url_custom_parameters',
    // ],
    // campaign: [
    //     'id',
    //     'name',
    //     'status',
    //     'serving_status',
    //     'ad_serving_optimization_status',
    //     'advertising_channel_type',
    //     'advertising_channel_sub_type',
    //     'tracking_url_template',
    //     'url_custom_parameters',
    //     // 'network_settings',
    //     // 'hotel_setting',
    //     // 'dynamic_search_ads_setting',
    //     // 'shopping_setting',
    //     'campaign_budget',
    //     'bidding_strategy_type',
    //     'start_date',
    //     'campaign_group',
    //     'end_date',
    // ],
    // 'campaign_budget': [
    //     'id',
    //     'name',
    //     'amount_micros',
    //     'status',
    //     'delivery_method',
    //     'explicitly_shared',
    //     'reference_count',
    // ],
    // 'campaign_criterion': [
    //     'campaign',
    //     'criterion_id',
    //     'bid_modifier',
    //     'negative',
    //     'type',
    // ],
    // 'campaign_shared_set': [
    //     'campaign',
    //     'shared_set',
    //     'status'
    // ]
} 

export default entities