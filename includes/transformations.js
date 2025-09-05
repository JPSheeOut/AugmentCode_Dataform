function createPlatformFromCampaign(campaign) {
  return  `case
            when regexp_contains(${campaign}, '(?i)(^yt_)') 
              then 'youtube'
            when regexp_contains(${campaign}, '(?i)(^gg_)')
              then 'google'  
            when regexp_contains(${campaign}, '(?i)(^fb_)') 
              then 'facebook'
            when regexp_contains(${campaign}, '(?i)(^meta_)') 
              then 'meta'            
            when regexp_contains(${campaign}, '(?i)(^li_)') 
              then 'linkedin' 
            when regexp_contains(${campaign}, '(?i)(^bg_)') 
              then 'bing'
            when regexp_contains(${campaign}, '(?i)(capterra)') 
              then 'capterra'     
            when regexp_contains(${campaign}, '(?i)(x_)') 
              then 'X'         
          else 'other'
          end`
           ;
}

function createRegionFromCampaign(campaign) {
  return  `case
            when regexp_contains(${campaign}, '(?i)(emea_)')
              then 'emea'  
            when regexp_contains(${campaign}, '(?i)(amer_|nam_)')
              then 'amer'        
            when regexp_contains(${campaign}, '(?i)(apac_)') 
              then 'apac'
            when regexp_contains(${campaign}, '(?i)(global_|all_)') 
              then 'global'       
          else 'other'
          end`
           ;
}

function createCampaignType(campaign) {
  return  `case
            when regexp_contains(${campaign}, '(?i)(brand)')
              then 'brand'
            when regexp_contains(${campaign}, '(?i)(competitor)')
              then 'competitor'
            when regexp_contains(${campaign}, '(?i)(display|discovery)')
              then 'display'
            when regexp_contains(${campaign}, '(?i)(generic)')
              then 'generic' 
            when regexp_contains(${campaign}, '(?i)(remarketing)')
              then 'remarketing'
            when regexp_contains(${campaign}, '(?i)(performance_max)')
              then 'performance_max'
            when regexp_contains(${campaign}, '(?i)(video)')
              then 'video'
            else 'other'
          end`
           ;
}


module.exports = {
	createPlatformFromCampaign
	, createRegionFromCampaign
	, createCampaignType
};