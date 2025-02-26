var wms_layers = [];

var format_gz_2010_us_040_00_500k_0 = new ol.format.GeoJSON();
var features_gz_2010_us_040_00_500k_0 = format_gz_2010_us_040_00_500k_0.readFeatures(json_gz_2010_us_040_00_500k_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gz_2010_us_040_00_500k_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gz_2010_us_040_00_500k_0.addFeatures(features_gz_2010_us_040_00_500k_0);
var lyr_gz_2010_us_040_00_500k_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gz_2010_us_040_00_500k_0, 
                style: style_gz_2010_us_040_00_500k_0,
                popuplayertitle: 'gz_2010_us_040_00_500k',
                interactive: true,
                title: '<img src="styles/legend/gz_2010_us_040_00_500k_0.png" /> gz_2010_us_040_00_500k'
            });
var format_AK_1 = new ol.format.GeoJSON();
var features_AK_1 = format_AK_1.readFeatures(json_AK_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AK_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AK_1.addFeatures(features_AK_1);
var lyr_AK_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AK_1, 
                style: style_AK_1,
                popuplayertitle: 'AK',
                interactive: true,
                title: '<img src="styles/legend/AK_1.png" /> AK'
            });
var format_AL_2 = new ol.format.GeoJSON();
var features_AL_2 = format_AL_2.readFeatures(json_AL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AL_2.addFeatures(features_AL_2);
var lyr_AL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AL_2, 
                style: style_AL_2,
                popuplayertitle: 'AL',
                interactive: true,
                title: '<img src="styles/legend/AL_2.png" /> AL'
            });
var format_AR_3 = new ol.format.GeoJSON();
var features_AR_3 = format_AR_3.readFeatures(json_AR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_3.addFeatures(features_AR_3);
var lyr_AR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AR_3, 
                style: style_AR_3,
                popuplayertitle: 'AR',
                interactive: true,
                title: '<img src="styles/legend/AR_3.png" /> AR'
            });
var format_AZ_4 = new ol.format.GeoJSON();
var features_AZ_4 = format_AZ_4.readFeatures(json_AZ_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AZ_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AZ_4.addFeatures(features_AZ_4);
var lyr_AZ_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AZ_4, 
                style: style_AZ_4,
                popuplayertitle: 'AZ',
                interactive: true,
                title: '<img src="styles/legend/AZ_4.png" /> AZ'
            });
var format_CA_5 = new ol.format.GeoJSON();
var features_CA_5 = format_CA_5.readFeatures(json_CA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CA_5.addFeatures(features_CA_5);
var lyr_CA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CA_5, 
                style: style_CA_5,
                popuplayertitle: 'CA',
                interactive: true,
                title: '<img src="styles/legend/CA_5.png" /> CA'
            });
var format_CO_6 = new ol.format.GeoJSON();
var features_CO_6 = format_CO_6.readFeatures(json_CO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CO_6.addFeatures(features_CO_6);
var lyr_CO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CO_6, 
                style: style_CO_6,
                popuplayertitle: 'CO',
                interactive: true,
                title: '<img src="styles/legend/CO_6.png" /> CO'
            });
var format_CT_7 = new ol.format.GeoJSON();
var features_CT_7 = format_CT_7.readFeatures(json_CT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CT_7.addFeatures(features_CT_7);
var lyr_CT_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CT_7, 
                style: style_CT_7,
                popuplayertitle: 'CT',
                interactive: true,
                title: '<img src="styles/legend/CT_7.png" /> CT'
            });
var format_DC_8 = new ol.format.GeoJSON();
var features_DC_8 = format_DC_8.readFeatures(json_DC_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DC_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DC_8.addFeatures(features_DC_8);
var lyr_DC_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DC_8, 
                style: style_DC_8,
                popuplayertitle: 'DC',
                interactive: true,
                title: '<img src="styles/legend/DC_8.png" /> DC'
            });
var format_DE_9 = new ol.format.GeoJSON();
var features_DE_9 = format_DE_9.readFeatures(json_DE_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DE_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DE_9.addFeatures(features_DE_9);
var lyr_DE_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DE_9, 
                style: style_DE_9,
                popuplayertitle: 'DE',
                interactive: true,
                title: '<img src="styles/legend/DE_9.png" /> DE'
            });
var format_FL_10 = new ol.format.GeoJSON();
var features_FL_10 = format_FL_10.readFeatures(json_FL_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FL_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FL_10.addFeatures(features_FL_10);
var lyr_FL_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FL_10, 
                style: style_FL_10,
                popuplayertitle: 'FL',
                interactive: true,
                title: '<img src="styles/legend/FL_10.png" /> FL'
            });
var format_GA_11 = new ol.format.GeoJSON();
var features_GA_11 = format_GA_11.readFeatures(json_GA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GA_11.addFeatures(features_GA_11);
var lyr_GA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GA_11, 
                style: style_GA_11,
                popuplayertitle: 'GA',
                interactive: true,
                title: '<img src="styles/legend/GA_11.png" /> GA'
            });
var format_HI_12 = new ol.format.GeoJSON();
var features_HI_12 = format_HI_12.readFeatures(json_HI_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HI_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HI_12.addFeatures(features_HI_12);
var lyr_HI_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HI_12, 
                style: style_HI_12,
                popuplayertitle: 'HI',
                interactive: true,
                title: '<img src="styles/legend/HI_12.png" /> HI'
            });
var format_IA_13 = new ol.format.GeoJSON();
var features_IA_13 = format_IA_13.readFeatures(json_IA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IA_13.addFeatures(features_IA_13);
var lyr_IA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IA_13, 
                style: style_IA_13,
                popuplayertitle: 'IA',
                interactive: true,
                title: '<img src="styles/legend/IA_13.png" /> IA'
            });
var format_ID_14 = new ol.format.GeoJSON();
var features_ID_14 = format_ID_14.readFeatures(json_ID_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ID_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ID_14.addFeatures(features_ID_14);
var lyr_ID_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ID_14, 
                style: style_ID_14,
                popuplayertitle: 'ID',
                interactive: true,
                title: '<img src="styles/legend/ID_14.png" /> ID'
            });
var format_IL_15 = new ol.format.GeoJSON();
var features_IL_15 = format_IL_15.readFeatures(json_IL_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IL_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IL_15.addFeatures(features_IL_15);
var lyr_IL_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IL_15, 
                style: style_IL_15,
                popuplayertitle: 'IL',
                interactive: true,
                title: '<img src="styles/legend/IL_15.png" /> IL'
            });
var format_IN_16 = new ol.format.GeoJSON();
var features_IN_16 = format_IN_16.readFeatures(json_IN_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IN_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IN_16.addFeatures(features_IN_16);
var lyr_IN_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IN_16, 
                style: style_IN_16,
                popuplayertitle: 'IN',
                interactive: true,
                title: '<img src="styles/legend/IN_16.png" /> IN'
            });
var format_KS_17 = new ol.format.GeoJSON();
var features_KS_17 = format_KS_17.readFeatures(json_KS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KS_17.addFeatures(features_KS_17);
var lyr_KS_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KS_17, 
                style: style_KS_17,
                popuplayertitle: 'KS',
                interactive: true,
                title: '<img src="styles/legend/KS_17.png" /> KS'
            });
var format_KY_18 = new ol.format.GeoJSON();
var features_KY_18 = format_KY_18.readFeatures(json_KY_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KY_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KY_18.addFeatures(features_KY_18);
var lyr_KY_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KY_18, 
                style: style_KY_18,
                popuplayertitle: 'KY',
                interactive: true,
                title: '<img src="styles/legend/KY_18.png" /> KY'
            });
var format_LA_19 = new ol.format.GeoJSON();
var features_LA_19 = format_LA_19.readFeatures(json_LA_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LA_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LA_19.addFeatures(features_LA_19);
var lyr_LA_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LA_19, 
                style: style_LA_19,
                popuplayertitle: 'LA',
                interactive: true,
                title: '<img src="styles/legend/LA_19.png" /> LA'
            });
var format_MA_20 = new ol.format.GeoJSON();
var features_MA_20 = format_MA_20.readFeatures(json_MA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MA_20.addFeatures(features_MA_20);
var lyr_MA_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MA_20, 
                style: style_MA_20,
                popuplayertitle: 'MA',
                interactive: true,
                title: '<img src="styles/legend/MA_20.png" /> MA'
            });
var format_MD_21 = new ol.format.GeoJSON();
var features_MD_21 = format_MD_21.readFeatures(json_MD_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MD_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MD_21.addFeatures(features_MD_21);
var lyr_MD_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MD_21, 
                style: style_MD_21,
                popuplayertitle: 'MD',
                interactive: true,
                title: '<img src="styles/legend/MD_21.png" /> MD'
            });
var format_ME_22 = new ol.format.GeoJSON();
var features_ME_22 = format_ME_22.readFeatures(json_ME_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ME_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ME_22.addFeatures(features_ME_22);
var lyr_ME_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ME_22, 
                style: style_ME_22,
                popuplayertitle: 'ME',
                interactive: true,
                title: '<img src="styles/legend/ME_22.png" /> ME'
            });
var format_MI_23 = new ol.format.GeoJSON();
var features_MI_23 = format_MI_23.readFeatures(json_MI_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MI_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MI_23.addFeatures(features_MI_23);
var lyr_MI_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MI_23, 
                style: style_MI_23,
                popuplayertitle: 'MI',
                interactive: true,
                title: '<img src="styles/legend/MI_23.png" /> MI'
            });
var format_MN_24 = new ol.format.GeoJSON();
var features_MN_24 = format_MN_24.readFeatures(json_MN_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MN_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MN_24.addFeatures(features_MN_24);
var lyr_MN_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MN_24, 
                style: style_MN_24,
                popuplayertitle: 'MN',
                interactive: true,
                title: '<img src="styles/legend/MN_24.png" /> MN'
            });
var format_MO_25 = new ol.format.GeoJSON();
var features_MO_25 = format_MO_25.readFeatures(json_MO_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MO_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MO_25.addFeatures(features_MO_25);
var lyr_MO_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MO_25, 
                style: style_MO_25,
                popuplayertitle: 'MO',
                interactive: true,
                title: '<img src="styles/legend/MO_25.png" /> MO'
            });
var format_MP_26 = new ol.format.GeoJSON();
var features_MP_26 = format_MP_26.readFeatures(json_MP_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MP_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MP_26.addFeatures(features_MP_26);
var lyr_MP_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MP_26, 
                style: style_MP_26,
                popuplayertitle: 'MP',
                interactive: true,
                title: '<img src="styles/legend/MP_26.png" /> MP'
            });
var format_MS_27 = new ol.format.GeoJSON();
var features_MS_27 = format_MS_27.readFeatures(json_MS_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MS_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MS_27.addFeatures(features_MS_27);
var lyr_MS_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MS_27, 
                style: style_MS_27,
                popuplayertitle: 'MS',
                interactive: true,
                title: '<img src="styles/legend/MS_27.png" /> MS'
            });
var format_MT_28 = new ol.format.GeoJSON();
var features_MT_28 = format_MT_28.readFeatures(json_MT_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT_28.addFeatures(features_MT_28);
var lyr_MT_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT_28, 
                style: style_MT_28,
                popuplayertitle: 'MT',
                interactive: true,
                title: '<img src="styles/legend/MT_28.png" /> MT'
            });
var format_NC_29 = new ol.format.GeoJSON();
var features_NC_29 = format_NC_29.readFeatures(json_NC_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NC_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NC_29.addFeatures(features_NC_29);
var lyr_NC_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NC_29, 
                style: style_NC_29,
                popuplayertitle: 'NC',
                interactive: true,
                title: '<img src="styles/legend/NC_29.png" /> NC'
            });
var format_ND_30 = new ol.format.GeoJSON();
var features_ND_30 = format_ND_30.readFeatures(json_ND_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ND_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ND_30.addFeatures(features_ND_30);
var lyr_ND_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ND_30, 
                style: style_ND_30,
                popuplayertitle: 'ND',
                interactive: true,
                title: '<img src="styles/legend/ND_30.png" /> ND'
            });
var format_NE_31 = new ol.format.GeoJSON();
var features_NE_31 = format_NE_31.readFeatures(json_NE_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NE_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NE_31.addFeatures(features_NE_31);
var lyr_NE_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NE_31, 
                style: style_NE_31,
                popuplayertitle: 'NE',
                interactive: true,
                title: '<img src="styles/legend/NE_31.png" /> NE'
            });
var format_NH_32 = new ol.format.GeoJSON();
var features_NH_32 = format_NH_32.readFeatures(json_NH_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NH_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NH_32.addFeatures(features_NH_32);
var lyr_NH_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NH_32, 
                style: style_NH_32,
                popuplayertitle: 'NH',
                interactive: true,
                title: '<img src="styles/legend/NH_32.png" /> NH'
            });
var format_NJ_33 = new ol.format.GeoJSON();
var features_NJ_33 = format_NJ_33.readFeatures(json_NJ_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NJ_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NJ_33.addFeatures(features_NJ_33);
var lyr_NJ_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NJ_33, 
                style: style_NJ_33,
                popuplayertitle: 'NJ',
                interactive: true,
                title: '<img src="styles/legend/NJ_33.png" /> NJ'
            });
var format_NM_34 = new ol.format.GeoJSON();
var features_NM_34 = format_NM_34.readFeatures(json_NM_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NM_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NM_34.addFeatures(features_NM_34);
var lyr_NM_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NM_34, 
                style: style_NM_34,
                popuplayertitle: 'NM',
                interactive: true,
                title: '<img src="styles/legend/NM_34.png" /> NM'
            });
var format_NV_35 = new ol.format.GeoJSON();
var features_NV_35 = format_NV_35.readFeatures(json_NV_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NV_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NV_35.addFeatures(features_NV_35);
var lyr_NV_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NV_35, 
                style: style_NV_35,
                popuplayertitle: 'NV',
                interactive: true,
                title: '<img src="styles/legend/NV_35.png" /> NV'
            });
var format_NY_36 = new ol.format.GeoJSON();
var features_NY_36 = format_NY_36.readFeatures(json_NY_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NY_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NY_36.addFeatures(features_NY_36);
var lyr_NY_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NY_36, 
                style: style_NY_36,
                popuplayertitle: 'NY',
                interactive: true,
                title: '<img src="styles/legend/NY_36.png" /> NY'
            });
var format_OH_37 = new ol.format.GeoJSON();
var features_OH_37 = format_OH_37.readFeatures(json_OH_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OH_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OH_37.addFeatures(features_OH_37);
var lyr_OH_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OH_37, 
                style: style_OH_37,
                popuplayertitle: 'OH',
                interactive: true,
                title: '<img src="styles/legend/OH_37.png" /> OH'
            });
var format_OK_38 = new ol.format.GeoJSON();
var features_OK_38 = format_OK_38.readFeatures(json_OK_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OK_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OK_38.addFeatures(features_OK_38);
var lyr_OK_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OK_38, 
                style: style_OK_38,
                popuplayertitle: 'OK',
                interactive: true,
                title: '<img src="styles/legend/OK_38.png" /> OK'
            });
var format_OR_39 = new ol.format.GeoJSON();
var features_OR_39 = format_OR_39.readFeatures(json_OR_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OR_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OR_39.addFeatures(features_OR_39);
var lyr_OR_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OR_39, 
                style: style_OR_39,
                popuplayertitle: 'OR',
                interactive: true,
                title: '<img src="styles/legend/OR_39.png" /> OR'
            });
var format_PA_40 = new ol.format.GeoJSON();
var features_PA_40 = format_PA_40.readFeatures(json_PA_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PA_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PA_40.addFeatures(features_PA_40);
var lyr_PA_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PA_40, 
                style: style_PA_40,
                popuplayertitle: 'PA',
                interactive: true,
                title: '<img src="styles/legend/PA_40.png" /> PA'
            });
var format_PR_41 = new ol.format.GeoJSON();
var features_PR_41 = format_PR_41.readFeatures(json_PR_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PR_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PR_41.addFeatures(features_PR_41);
var lyr_PR_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PR_41, 
                style: style_PR_41,
                popuplayertitle: 'PR',
                interactive: true,
                title: '<img src="styles/legend/PR_41.png" /> PR'
            });
var format_RI_42 = new ol.format.GeoJSON();
var features_RI_42 = format_RI_42.readFeatures(json_RI_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RI_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RI_42.addFeatures(features_RI_42);
var lyr_RI_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RI_42, 
                style: style_RI_42,
                popuplayertitle: 'RI',
                interactive: true,
                title: '<img src="styles/legend/RI_42.png" /> RI'
            });
var format_SC_43 = new ol.format.GeoJSON();
var features_SC_43 = format_SC_43.readFeatures(json_SC_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SC_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SC_43.addFeatures(features_SC_43);
var lyr_SC_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SC_43, 
                style: style_SC_43,
                popuplayertitle: 'SC',
                interactive: true,
                title: '<img src="styles/legend/SC_43.png" /> SC'
            });
var format_SD_44 = new ol.format.GeoJSON();
var features_SD_44 = format_SD_44.readFeatures(json_SD_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SD_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SD_44.addFeatures(features_SD_44);
var lyr_SD_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SD_44, 
                style: style_SD_44,
                popuplayertitle: 'SD',
                interactive: true,
                title: '<img src="styles/legend/SD_44.png" /> SD'
            });
var format_TN_45 = new ol.format.GeoJSON();
var features_TN_45 = format_TN_45.readFeatures(json_TN_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TN_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TN_45.addFeatures(features_TN_45);
var lyr_TN_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TN_45, 
                style: style_TN_45,
                popuplayertitle: 'TN',
                interactive: true,
                title: '<img src="styles/legend/TN_45.png" /> TN'
            });
var format_TX_46 = new ol.format.GeoJSON();
var features_TX_46 = format_TX_46.readFeatures(json_TX_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TX_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TX_46.addFeatures(features_TX_46);
var lyr_TX_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TX_46, 
                style: style_TX_46,
                popuplayertitle: 'TX',
                interactive: true,
                title: '<img src="styles/legend/TX_46.png" /> TX'
            });
var format_UT_47 = new ol.format.GeoJSON();
var features_UT_47 = format_UT_47.readFeatures(json_UT_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UT_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UT_47.addFeatures(features_UT_47);
var lyr_UT_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UT_47, 
                style: style_UT_47,
                popuplayertitle: 'UT',
                interactive: true,
                title: '<img src="styles/legend/UT_47.png" /> UT'
            });
var format_VA_48 = new ol.format.GeoJSON();
var features_VA_48 = format_VA_48.readFeatures(json_VA_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VA_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VA_48.addFeatures(features_VA_48);
var lyr_VA_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VA_48, 
                style: style_VA_48,
                popuplayertitle: 'VA',
                interactive: true,
                title: '<img src="styles/legend/VA_48.png" /> VA'
            });
var format_VI_49 = new ol.format.GeoJSON();
var features_VI_49 = format_VI_49.readFeatures(json_VI_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VI_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VI_49.addFeatures(features_VI_49);
var lyr_VI_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VI_49, 
                style: style_VI_49,
                popuplayertitle: 'VI',
                interactive: true,
                title: '<img src="styles/legend/VI_49.png" /> VI'
            });
var format_VT_50 = new ol.format.GeoJSON();
var features_VT_50 = format_VT_50.readFeatures(json_VT_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VT_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VT_50.addFeatures(features_VT_50);
var lyr_VT_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VT_50, 
                style: style_VT_50,
                popuplayertitle: 'VT',
                interactive: true,
                title: '<img src="styles/legend/VT_50.png" /> VT'
            });
var format_WA_51 = new ol.format.GeoJSON();
var features_WA_51 = format_WA_51.readFeatures(json_WA_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WA_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WA_51.addFeatures(features_WA_51);
var lyr_WA_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WA_51, 
                style: style_WA_51,
                popuplayertitle: 'WA',
                interactive: true,
                title: '<img src="styles/legend/WA_51.png" /> WA'
            });
var format_WI_52 = new ol.format.GeoJSON();
var features_WI_52 = format_WI_52.readFeatures(json_WI_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WI_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WI_52.addFeatures(features_WI_52);
var lyr_WI_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WI_52, 
                style: style_WI_52,
                popuplayertitle: 'WI',
                interactive: true,
                title: '<img src="styles/legend/WI_52.png" /> WI'
            });
var format_WV_53 = new ol.format.GeoJSON();
var features_WV_53 = format_WV_53.readFeatures(json_WV_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WV_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WV_53.addFeatures(features_WV_53);
var lyr_WV_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WV_53, 
                style: style_WV_53,
                popuplayertitle: 'WV',
                interactive: true,
                title: '<img src="styles/legend/WV_53.png" /> WV'
            });
var format_WY_54 = new ol.format.GeoJSON();
var features_WY_54 = format_WY_54.readFeatures(json_WY_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WY_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WY_54.addFeatures(features_WY_54);
var lyr_WY_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WY_54, 
                style: style_WY_54,
                popuplayertitle: 'WY',
                interactive: true,
                title: '<img src="styles/legend/WY_54.png" /> WY'
            });

lyr_gz_2010_us_040_00_500k_0.setVisible(true);lyr_AK_1.setVisible(true);lyr_AL_2.setVisible(true);lyr_AR_3.setVisible(true);lyr_AZ_4.setVisible(true);lyr_CA_5.setVisible(true);lyr_CO_6.setVisible(true);lyr_CT_7.setVisible(true);lyr_DC_8.setVisible(true);lyr_DE_9.setVisible(true);lyr_FL_10.setVisible(true);lyr_GA_11.setVisible(true);lyr_HI_12.setVisible(true);lyr_IA_13.setVisible(true);lyr_ID_14.setVisible(true);lyr_IL_15.setVisible(true);lyr_IN_16.setVisible(true);lyr_KS_17.setVisible(true);lyr_KY_18.setVisible(true);lyr_LA_19.setVisible(true);lyr_MA_20.setVisible(true);lyr_MD_21.setVisible(true);lyr_ME_22.setVisible(true);lyr_MI_23.setVisible(true);lyr_MN_24.setVisible(true);lyr_MO_25.setVisible(true);lyr_MP_26.setVisible(true);lyr_MS_27.setVisible(true);lyr_MT_28.setVisible(true);lyr_NC_29.setVisible(true);lyr_ND_30.setVisible(true);lyr_NE_31.setVisible(true);lyr_NH_32.setVisible(true);lyr_NJ_33.setVisible(true);lyr_NM_34.setVisible(true);lyr_NV_35.setVisible(true);lyr_NY_36.setVisible(true);lyr_OH_37.setVisible(true);lyr_OK_38.setVisible(true);lyr_OR_39.setVisible(true);lyr_PA_40.setVisible(true);lyr_PR_41.setVisible(true);lyr_RI_42.setVisible(true);lyr_SC_43.setVisible(true);lyr_SD_44.setVisible(true);lyr_TN_45.setVisible(true);lyr_TX_46.setVisible(true);lyr_UT_47.setVisible(true);lyr_VA_48.setVisible(true);lyr_VI_49.setVisible(true);lyr_VT_50.setVisible(true);lyr_WA_51.setVisible(true);lyr_WI_52.setVisible(true);lyr_WV_53.setVisible(true);lyr_WY_54.setVisible(true);
var layersList = [lyr_gz_2010_us_040_00_500k_0,lyr_AK_1,lyr_AL_2,lyr_AR_3,lyr_AZ_4,lyr_CA_5,lyr_CO_6,lyr_CT_7,lyr_DC_8,lyr_DE_9,lyr_FL_10,lyr_GA_11,lyr_HI_12,lyr_IA_13,lyr_ID_14,lyr_IL_15,lyr_IN_16,lyr_KS_17,lyr_KY_18,lyr_LA_19,lyr_MA_20,lyr_MD_21,lyr_ME_22,lyr_MI_23,lyr_MN_24,lyr_MO_25,lyr_MP_26,lyr_MS_27,lyr_MT_28,lyr_NC_29,lyr_ND_30,lyr_NE_31,lyr_NH_32,lyr_NJ_33,lyr_NM_34,lyr_NV_35,lyr_NY_36,lyr_OH_37,lyr_OK_38,lyr_OR_39,lyr_PA_40,lyr_PR_41,lyr_RI_42,lyr_SC_43,lyr_SD_44,lyr_TN_45,lyr_TX_46,lyr_UT_47,lyr_VA_48,lyr_VI_49,lyr_VT_50,lyr_WA_51,lyr_WI_52,lyr_WV_53,lyr_WY_54];
lyr_gz_2010_us_040_00_500k_0.set('fieldAliases', {'GEO_ID': 'GEO_ID', 'STATE': 'STATE', 'NAME': 'NAME', 'LSAD': 'LSAD', 'CENSUSAREA': 'CENSUSAREA', });
lyr_AK_1.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_AL_2.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_AR_3.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_AZ_4.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_CA_5.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_CO_6.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_CT_7.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_DC_8.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_DE_9.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_FL_10.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_GA_11.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_HI_12.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_IA_13.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_ID_14.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_IL_15.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_IN_16.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_KS_17.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_KY_18.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_LA_19.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_MA_20.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_MD_21.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_ME_22.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_MI_23.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_MN_24.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_MO_25.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_MP_26.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_MS_27.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_MT_28.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_NC_29.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_ND_30.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_NE_31.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_NH_32.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_NJ_33.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_NM_34.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_NV_35.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_NY_36.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_OH_37.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_OK_38.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_OR_39.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_PA_40.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_PR_41.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_RI_42.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_SC_43.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_SD_44.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_TN_45.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_TX_46.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_UT_47.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_VA_48.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_VI_49.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_VT_50.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_WA_51.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_WI_52.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_WV_53.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_WY_54.set('fieldAliases', {'ID': 'ID', 'SchoolName': 'SchoolName', 'SchoolType': 'SchoolType', 'NCESDistrictID': 'NCESDistrictID', 'StateDistrictdataID': 'StateDistrictdataID', 'DistrictName': 'DistrictName', 'CountyName': 'CountyName', 'StreetAddress': 'StreetAddress', 'City': 'City', 'State': 'State', 'ZIP': 'ZIP', 'ZIP4digit': 'ZIP4digit', 'Country': 'Country', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Phone': 'Phone', 'Students': 'Students', 'Teachers': 'Teachers', 'Schools': 'Schools', 'LocaleCode': 'LocaleCode', 'Locale': 'Locale', 'StudentTeacherRatio': 'StudentTeacherRatio', 'Type': 'Type', 'Website': 'Website', 'CrimeRate': 'CrimeRate', 'Detailspage': 'Detailspage', 'CrimeRateAssault': 'CrimeRateAssault', 'CrimeRateRobbery': 'CrimeRateRobbery', 'CrimeRateRape': 'CrimeRateRape', 'CrimeRateMurder': 'CrimeRateMurder', });
lyr_gz_2010_us_040_00_500k_0.set('fieldImages', {'GEO_ID': 'TextEdit', 'STATE': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'CENSUSAREA': 'TextEdit', });
lyr_AK_1.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_AL_2.set('fieldImages', {'ID': 'Range', 'SchoolName': 'TextEdit', 'SchoolType': 'TextEdit', 'NCESDistrictID': 'Range', 'StateDistrictdataID': 'TextEdit', 'DistrictName': 'TextEdit', 'CountyName': 'TextEdit', 'StreetAddress': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'Range', 'ZIP4digit': 'Range', 'Country': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Phone': 'TextEdit', 'Students': 'Range', 'Teachers': 'TextEdit', 'Schools': 'Range', 'LocaleCode': 'Range', 'Locale': 'TextEdit', 'StudentTeacherRatio': 'TextEdit', 'Type': 'TextEdit', 'Website': 'TextEdit', 'CrimeRate': 'TextEdit', 'Detailspage': 'TextEdit', 'CrimeRateAssault': 'TextEdit', 'CrimeRateRobbery': 'TextEdit', 'CrimeRateRape': 'TextEdit', 'CrimeRateMurder': 'TextEdit', });
lyr_AR_3.set('fieldImages', {'ID': 'Range', 'SchoolName': 'TextEdit', 'SchoolType': 'TextEdit', 'NCESDistrictID': 'Range', 'StateDistrictdataID': 'TextEdit', 'DistrictName': 'TextEdit', 'CountyName': 'TextEdit', 'StreetAddress': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'Range', 'ZIP4digit': 'CheckBox', 'Country': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Phone': 'TextEdit', 'Students': 'Range', 'Teachers': 'TextEdit', 'Schools': 'Range', 'LocaleCode': 'Range', 'Locale': 'TextEdit', 'StudentTeacherRatio': 'TextEdit', 'Type': 'TextEdit', 'Website': 'TextEdit', 'CrimeRate': 'TextEdit', 'Detailspage': 'TextEdit', 'CrimeRateAssault': 'TextEdit', 'CrimeRateRobbery': 'TextEdit', 'CrimeRateRape': 'TextEdit', 'CrimeRateMurder': 'TextEdit', });
lyr_AZ_4.set('fieldImages', {'ID': 'Range', 'SchoolName': 'TextEdit', 'SchoolType': 'TextEdit', 'NCESDistrictID': 'Range', 'StateDistrictdataID': 'TextEdit', 'DistrictName': 'TextEdit', 'CountyName': 'TextEdit', 'StreetAddress': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'Range', 'ZIP4digit': 'Range', 'Country': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Phone': 'TextEdit', 'Students': 'Range', 'Teachers': 'TextEdit', 'Schools': 'Range', 'LocaleCode': 'Range', 'Locale': 'TextEdit', 'StudentTeacherRatio': 'TextEdit', 'Type': 'TextEdit', 'Website': 'TextEdit', 'CrimeRate': 'TextEdit', 'Detailspage': 'TextEdit', 'CrimeRateAssault': 'TextEdit', 'CrimeRateRobbery': 'TextEdit', 'CrimeRateRape': 'TextEdit', 'CrimeRateMurder': 'TextEdit', });
lyr_CA_5.set('fieldImages', {'ID': 'Range', 'SchoolName': 'TextEdit', 'SchoolType': 'TextEdit', 'NCESDistrictID': 'Range', 'StateDistrictdataID': 'TextEdit', 'DistrictName': 'TextEdit', 'CountyName': 'TextEdit', 'StreetAddress': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'Range', 'ZIP4digit': 'Range', 'Country': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Phone': 'TextEdit', 'Students': 'TextEdit', 'Teachers': 'TextEdit', 'Schools': 'Range', 'LocaleCode': 'Range', 'Locale': 'TextEdit', 'StudentTeacherRatio': 'TextEdit', 'Type': 'TextEdit', 'Website': 'TextEdit', 'CrimeRate': 'TextEdit', 'Detailspage': 'TextEdit', 'CrimeRateAssault': 'TextEdit', 'CrimeRateRobbery': 'TextEdit', 'CrimeRateRape': 'TextEdit', 'CrimeRateMurder': 'TextEdit', });
lyr_CO_6.set('fieldImages', {'ID': 'Range', 'SchoolName': 'TextEdit', 'SchoolType': 'TextEdit', 'NCESDistrictID': 'Range', 'StateDistrictdataID': 'TextEdit', 'DistrictName': 'TextEdit', 'CountyName': 'TextEdit', 'StreetAddress': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'ZIP': 'Range', 'ZIP4digit': 'Range', 'Country': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Phone': 'TextEdit', 'Students': 'Range', 'Teachers': 'TextEdit', 'Schools': 'Range', 'LocaleCode': 'Range', 'Locale': 'TextEdit', 'StudentTeacherRatio': 'TextEdit', 'Type': 'TextEdit', 'Website': 'TextEdit', 'CrimeRate': 'TextEdit', 'Detailspage': 'TextEdit', 'CrimeRateAssault': 'TextEdit', 'CrimeRateRobbery': 'TextEdit', 'CrimeRateRape': 'TextEdit', 'CrimeRateMurder': 'TextEdit', });
lyr_CT_7.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_DC_8.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_DE_9.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_FL_10.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_GA_11.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_HI_12.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_IA_13.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_ID_14.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_IL_15.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_IN_16.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_KS_17.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_KY_18.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_LA_19.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_MA_20.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_MD_21.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_ME_22.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_MI_23.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_MN_24.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_MO_25.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_MP_26.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_MS_27.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_MT_28.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_NC_29.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_ND_30.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_NE_31.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_NH_32.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_NJ_33.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_NM_34.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_NV_35.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_NY_36.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_OH_37.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_OK_38.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_OR_39.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_PA_40.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_PR_41.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_RI_42.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_SC_43.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_SD_44.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_TN_45.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_TX_46.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_UT_47.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_VA_48.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_VI_49.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_VT_50.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_WA_51.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_WI_52.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_WV_53.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_WY_54.set('fieldImages', {'ID': '', 'SchoolName': '', 'SchoolType': '', 'NCESDistrictID': '', 'StateDistrictdataID': '', 'DistrictName': '', 'CountyName': '', 'StreetAddress': '', 'City': '', 'State': '', 'ZIP': '', 'ZIP4digit': '', 'Country': '', 'Latitude': '', 'Longitude': '', 'Phone': '', 'Students': '', 'Teachers': '', 'Schools': '', 'LocaleCode': '', 'Locale': '', 'StudentTeacherRatio': '', 'Type': '', 'Website': '', 'CrimeRate': '', 'Detailspage': '', 'CrimeRateAssault': '', 'CrimeRateRobbery': '', 'CrimeRateRape': '', 'CrimeRateMurder': '', });
lyr_gz_2010_us_040_00_500k_0.set('fieldLabels', {'GEO_ID': 'no label', 'STATE': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'CENSUSAREA': 'no label', });
lyr_AK_1.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_AL_2.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_AR_3.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_AZ_4.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_CA_5.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_CO_6.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_CT_7.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_DC_8.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_DE_9.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_FL_10.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_GA_11.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_HI_12.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_IA_13.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_ID_14.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_IL_15.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_IN_16.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_KS_17.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_KY_18.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_LA_19.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_MA_20.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_MD_21.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_ME_22.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_MI_23.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_MN_24.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_MO_25.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_MP_26.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_MS_27.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_MT_28.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_NC_29.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_ND_30.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_NE_31.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_NH_32.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_NJ_33.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_NM_34.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_NV_35.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_NY_36.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_OH_37.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_OK_38.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_OR_39.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_PA_40.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_PR_41.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_RI_42.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_SC_43.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_SD_44.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_TN_45.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_TX_46.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_UT_47.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_VA_48.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_VI_49.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_VT_50.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_WA_51.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_WI_52.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_WV_53.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_WY_54.set('fieldLabels', {'ID': 'no label', 'SchoolName': 'no label', 'SchoolType': 'no label', 'NCESDistrictID': 'no label', 'StateDistrictdataID': 'no label', 'DistrictName': 'no label', 'CountyName': 'no label', 'StreetAddress': 'no label', 'City': 'no label', 'State': 'no label', 'ZIP': 'no label', 'ZIP4digit': 'no label', 'Country': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Phone': 'no label', 'Students': 'no label', 'Teachers': 'no label', 'Schools': 'no label', 'LocaleCode': 'no label', 'Locale': 'no label', 'StudentTeacherRatio': 'no label', 'Type': 'no label', 'Website': 'no label', 'CrimeRate': 'no label', 'Detailspage': 'no label', 'CrimeRateAssault': 'no label', 'CrimeRateRobbery': 'no label', 'CrimeRateRape': 'no label', 'CrimeRateMurder': 'no label', });
lyr_WY_54.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});