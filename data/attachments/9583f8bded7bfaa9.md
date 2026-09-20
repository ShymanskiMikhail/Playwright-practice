# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hw-09-typescript/checkbox.spec.ts >> test
- Location: hw-09-typescript/checkbox.spec.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('checkbox', { name: 'Select Desktop' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
      - img [ref=e5]
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e14] [cursor=pointer]:
          - generic [ref=e15]:
            - img [ref=e17]
            - text: Elements
          - img [ref=e22]
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
              - img [ref=e28]
              - text: Text Box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
              - img [ref=e32]
              - text: Check Box
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
              - img [ref=e36]
              - text: Radio Button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
              - img [ref=e40]
              - text: Web Tables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
              - img [ref=e44]
              - text: Buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
              - img [ref=e48]
              - text: Links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
              - img [ref=e52]
              - text: Broken Links - Images
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
              - img [ref=e56]
              - text: Upload and Download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
              - img [ref=e60]
              - text: Dynamic Properties
      - generic [ref=e64] [cursor=pointer]:
        - generic [ref=e65]:
          - img [ref=e67]
          - text: Forms
        - img [ref=e73]
      - generic [ref=e77] [cursor=pointer]:
        - generic [ref=e78]:
          - img [ref=e80]
          - text: Alerts, Frame & Windows
        - img [ref=e85]
      - generic [ref=e89] [cursor=pointer]:
        - generic [ref=e90]:
          - img [ref=e92]
          - text: Widgets
        - img [ref=e98]
      - generic [ref=e102] [cursor=pointer]:
        - generic [ref=e103]:
          - img [ref=e105]
          - text: Interactions
        - img [ref=e110]
      - generic [ref=e114] [cursor=pointer]:
        - generic [ref=e115]:
          - img [ref=e117]
          - text: Book Store Application
        - img [ref=e122]
    - generic [ref=e124]:
      - heading "Check Box" [level=1] [ref=e125]
      - generic [ref=e127]:
        - generic:
          - textbox "for screen reader"
        - tree [ref=e128]:
          - treeitem "Select Home Home" [ref=e132]:
            - checkbox "Select Home" [ref=e134] [cursor=pointer]
            - generic "Home" [ref=e135] [cursor=pointer]:
              - generic [ref=e137]: Home
      - iframe [ref=e141]:
        - generic [ref=f13e2]:
          - link "Advertisement" [ref=f13e4] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsu-1CS0XwSDebFi0DSG4Rkj1FzY7cnxLk-vUg86uEGWo7p5U3ezmlYVlhv4VStfiYU9xtLXO1OI4d8f95jSx-vOqnBU9Gx8818550hb4q3sXGrnrOoXranOaxeoYROYYAtT41te8ni41iTLyVrNjmZHcuH3uw-sfGZP625kCu80CDHbNxCk2-JDx1tSFNyYTJRUX9ChLfSiM5xtbWgtpGKNN4GtfT5z1cc258rTjO4Ou9IqLHTdxTyK58ElA0OtzPQTLa28ZRXkxODr2kobWt3XWq72hZD5Dm8m6twS4EXY0Ej2VlXIKsFmCi0-08GQVON9tJ0u8--jKWCGjELCWFqllANiiGnQRgE2aXyURn6HuGM8r5eCeDB0FVgNnxL0nafDaQuJBli8ZpGWc7zNMVw_ODh66A6fvvmJlG7Ze6ho5r37twzxWxAytvKvMTRe1CrTX6AXwt_F3Jkb97wrP8IQKBM7Aq515FLlNytXmx9B0KWsP3zf1RI2pOJpg_mSw_ubmdEpPGbcXkI6VZoWBj2o5ZeCkB_ZDgMrSbM559pzNwA8sAtgtfqgeHqmBtkjpHU7HTDcSGONy4zBOQz2c8qLGMP5NWrNkV1rLpXPIOu3wH4Cq_n2gp--oF5eFEbrQvtbLzsZ-NBitNZyeLi-fyOKSTZMPlMCWZhrB1KlezRtzzHWBSl4rtxgFgf9Fq7glBCMWMr0D8H_0KWTxWyfJklUa6f5Al8d3iT7lH8bq2aYlbceqS8JRj1Lgi0-pXNyRyQp-izHxalalRPnAf5anAwLWbVnzfxOUvUzK0H9bgYJauwYnZ0vUd5yHiu6XkVRxwba7Py7n70H1EsW8HfYQJEt_EKyZQABA5GtsyAVcUYaDMz3fRuFUl1DskhDjBBiLdVYf0CXWVIIF7ejm3APhrlt-qVMuPO2bPDeOGuw7UoNPWshk0l2e_r01dpJEzQ1ynAECSeM4rLivHb3MmAhfQgUnCIkoyMe-NaGHvLiKM1H1LyPW6g_VLcZGMdEU3z6D33s3LZV9IWZGF22sCGQ4jRGZGRdpCRwlovPQNsWANMBRkaKPmh4wtQnSLcvUdbY46yjQdBtDpd4ezPy-VvOqe6SO8oCoBRXjTb_O_sJDtU4BPALFugwp1kYFFTcrykMoZlPCcpK1sUZX2Z3mOkK22AGuxEcqJbNtalgWi5DuaVsMUUwv3M-kC3wJMAql5rF3Ws_y0aHaZ44sRRHS2ByTzsXdDuZsi0Gqua13wfhnTYb1SZQy_tm2tE7_frP6dmAH_Un2d_F9NQByQjxgENdkwxQm20oHTPbSilaD5xItENwoMm1sx1QVlzTQ-7ouK1RZX8FzgcNV-aOaRR8-yfg1AqTN_s1NkWfsHu7CYDIBD8EgkAUAsvzSr8Y_a6Lp3foFWM9H_HtKdRAsakXMvtaFpiDLSbdA3_OjeIpjnqVm67dgvUjXVIJZvPhMbnwtt1dtF_ZbLqDoQrdO-E7BZvaELAucOJMsH4MhR_sFLDxcI7TpY3BVOqqtPut015AH1ERv4NL4Gu9qfMl1mL0Jw1A3TVF_LCF6ghacAvsROBF_qiwg_m-Ek6Lv4d8MAwl3IBy4Jd3IyqmwsU8KDMCJ_ONF_7AI1ixYkHZ9oehv-v0Xza3MGPsr3qV8Tx_EQ3HrHw9PiEtjHiAR_wPP1R5CIwGCIvMpXnk7SQXGVxuQP0kIk8A2XOgyZBfWjnbjBmprpF_ZAcJhTzYgOR9EZibySo0-2s9A4e64k-u2w3ZmESB2iVa8gChpnN9DTKNELPY1lyLUJ2SL9UDXI2ykugjQ6w8oFPG7nli5FObFxgX1PfIDDuxKiCSk5OYGzj4IK93-qZbC-wdRmIkXXUEzLBHIQ&sai=AMfl-YRdri9quQURqZ2QUiKi3rrJsV2bJLxlnzx8Y1QdKtXROjbfUATrsRKjSPKe3r0tghgb_MaZXS-pe_g-Cutp9gyw8bcv6rQfBQr5WlIA1gK3SrBWfZG4D4zpbHdgQbUA2yfc-jkqtbuCpC6xJUanQMSPU2z4-qut6R85ndoggotU1wH2sE5GwbDVb9ROdYDA2hQ4J3qi2F3qg6nMFzNc4kYmAHy-iylyeHclrsL2g-PRN_kLzJHhZwtLjoj0yeBMkz10HuLOd4_Gym1Pzw-khDMaHfstk_RfQqoyBhaxT0BzwoZDrihp8nKVh48Bqp49I03nvG1JCbADMonbMv9_4JxfEz8etBh5WvalrBQLsKeyRNk9M3GHbBtHyRkeWNIOZtCE4wQlvNUhGtLm-sIXDK6NIu6D-K2bVl1MEtthTwSjf6fChSVi5U1paZLL8KiDlCsRnhncxwBpoV0nK0BKnC-TNQASR_sNK_Ey5xM1KsoqpEV5keHDSd6FOQtEvWyt66J-ReTGRSTEQ85hd87TQCdyPZy8hfiNYtdkZa5tU2HVCFC5UPUdGHj-fXDmncRvuJ71EgJGzS_2xb3ireAicjx1F3nZB35GbP9GKNad7KMwhDmyYTnimnHUNXgUEkVZpcUlqNY66Cx7IJ6TctAFs0CuQQSHhCCGC0Yr_fj9irSVYGDUBCmy-EdFL5YjsCRaxgssng7HN0FUkckDewb5wLpOvxHFNLocAgbgJF-9ZULJdE8Mf2oH9SX0P4RM2qPepkGO8slQK-pwVHh3rdnCkw0rYPWo_BrwljUQKoBolHSTqF0oTZ1cTsIE2sNeSL9ipjfYkVVX3SLWoBzULAggm2TWp7_QN7TdwTfeAyLoKL-V1hV2tXmlt0gMoLShtTz9Dyqzr5y3Pp0XKXJ5XzSIo-U&sig=Cg0ArKJSzAGKGdnIMbTD&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.teamviewer.com/en-us/platform/one/%3Futm_source%3Dprogrammatic%26utm_medium%3Dcpm%26utm_campaign%3Dus%7Cb%7Cpr%7C26%7Capril%7CTeamviewerone-smb-mofu%7Cfree%7Ct0%7C0%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23755301217
            - img "Advertisement" [ref=f13e5]
          - generic [ref=f13e6]:
            - generic:
              - img [ref=f13e10] [cursor=pointer]
              - button [ref=f13e14] [cursor=pointer]:
                - img [ref=f13e15]
    - generic [ref=e146]:
      - iframe [ref=e149]:
        - generic [ref=f7e2]:
          - link "Advertisement" [ref=f7e4] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsvLkee28hi7M4RzMmq5Yd9AEpy2C418iiNDtykAZ840YriB0EJbSQ7TqnBBDNoE7vb1neJAK1hPVcfPkhhoLdlbuEBLGiHouE0TV5qnAcyouNX-6gKNHMDC19a_lahAjXuDgORTS8ebVgLj5lnbAE7WITI-kGFIIkNG4KoSaTHWXygzoiUEgGwy-nOeYB-6j8shkCvl1jQSZf6JOwbTA3eNolKXBW3Da_oVAfCYn6XCC1EXYd07uEBpPL-r2qiVjoBWFT-r3tJyvrY_lzhi68Fnx-XoOsobPO5wVXALuATAzy_mdmV-SgbRAqmcG8qaKmcArzXWQzcCDHS4LPoqwsxJv8FHVS2qfycKRqhVD8HOh4mwgt7EtkNeyeAnf_vwt3F0Bc_JfFqzTt-l5HIeqfKtZ_tZTIu1DNU90_BbUuWzPmiHfnQtoD3yO6ztz6Zs8LblVGina8GHR7N89ADIKYIcdPPjVeCMp7HfcZi0CawrFLwEh6RKs5kXHiQFSrn1KmelUTpRW-4X19WcSuHJn2ZB1K-EPACnD7icnu67q3VFAe4JTxj86d3X6KjIdFCHxQEjLEJEck0Tzn0Gg-SsItcHRN_da-co1EEsFIQX-qzh5-1xqXRKIrIxDWyrdwEy4kieQac8lHgAe6fHU15oncaccGzQI8k0YFIf9A08pRULuPzpYMahKlDH1nUhWJkivEPC8VZLOVnP86c0Wk7E-C7cC2GgfQegPUcimg8K49w1hEOIyNb_s80C-LQG_WGCRzMt5OgnC_qF5Z1I-MaIu-Eo1gE5z-lWOrL_zsrYIU9sCurecsxPE-8GhTTzUlp1OcQvVwc2j2CjB7w-KjYdfRy7M6BzQ5SoT5HbF-5nMvG9ParBpe5pM6BG2TlfLaLKwQ4LiRyyYPIZbhEVOPfftrdZOFFaMUpPCwMTT299657cGX84xFyVWhQGijyD4O-qdKn1cZEvygXFOTnego57Y0CCvXE7fiRsFNaNyPcZLtnDzKthLKIrwagD5RAj6TV0pWq4bViHUPJc6ICYHhAY5flseZ7R0Rv1FBGHC7IjjKAhXXemjkYaQllhPIWEY0kqi5mm9qB13BWponyZOixE-uCP2ZrW_XbyOsKIQsPKeGKtV1SDgCp8Qo-8NBSyqzNN0I9lClK9hV-OalgjwRtqFxTMErrIu0aMxg-LrSMOnD-kKnQevjR_PGqxR5v5fG3Jh3_Uw31_q5vv492cImlK9JArMDGaVAemmGai4VRtKJ-aKT5a5XPXjtLe-2ejPDXYFt1kOIyfK_u3jZe0elXsKsp_yzULJF46mbmgMuHNRl6-0txL_oHdLRGZl6fL5dM2aGkeUab__-xhW4sEiTq8u5UUgymvMWyu4nGIRH2wlWhWiQEpSAUHxboo-2BbEPH5o0_FHY6_R6sjXxiQa9Hi5IOUeX72CH8XyTd4imCfuDASKozGSaWWkD6mtOW2C9XDZuchiiSC-pRFSttety5mlb2gHuNG61IdoHRraMolr_LZspwA-h2yiaStVFk_V5mwhZyz7PzS7BZOYhgD-NPCJgU8QPQWONmelLf2J8T9_UATj0E1_2XILeQjnc_thCUo1THn4LVNttthzvJ0Gt1iVF_xyBK3BF3KZN6YjZXBHf6Qt-SyJUo0bMOCZgVheSh8W2avjwb4muKjcrjOXPurlw-B65jHGc4ntNhKVwfwv3kr8L7KTsT6cYN3lAy4JjqX2W2l7Xq3AqWKHqN7U5Uw0a8JG0nHJlnK2UQL2IkeorRcLmCwQjhbkxduoRZNuRLXDA6jwoDle5JqrmWHOClDx2eUBYfaih9wqNHTRK9sIb94zn7-ukq-lzgTeLAGPjsCP68HombqVIQ5dewdZvGi8jM&sai=AMfl-YS3P91MN2uA-lR-kYtvIHDbZ2RDOhKU5WH2Ml4KPE00pNutLXqlvO46vKyU-BZ5rcG1XKUEl0kcDVn5dvzKC913lbSfF5nTFUY2M_gFc6Q46vL3pi1HAjKGz-KDSNELXy51UPwA6GswaigoPfjiyttJE7C5hLTIkUaMgZwOVLp2b5OQ2ErDPwKiunUNpnQqhQTZrv-cUdb7B7DFF_i0fG3hVy82Co2V5XPvFKtfi2cCHZz8OCH0GmvRrw-xCf9qiLWD4M1gKpGcxMfr2SBejS_GlaYgQjjnj5CgNqYigkt26zBGRj6k0iiCDpHnVNv4cV-VEoDnGTP5GAoyyyK_bCE_zngq7T4-wPLr08fd7XFVZdKMb8koVqEqlNXJDT6B8qYbxsNLnCeiCgFsRskgZJ2HiSofiwsZi8ZxpLuPsVMPjCy0uh7SNRnp5DH0FGtQQMJpPVnJ64VXBh6d8Z55e-Z6R3NqDb5ogPH65I_TbRvhiiM07Bto5V7ZWVeMTgAx876CJpC-7_mdvafhkeIYNkAHn_uUocmlNQUAdL7qdnhALfnhAv-D-NzRdpdgAtSCMFbDOFVgLuQPLvQz9DWDs-yVtfMHs8GHBRVQ_fyJev1VMJWzuBV0DKRBK3HvzmjRegwXSCONFoS9BptKTIlzcQ5PeYz60OTk_KrRCmLz4pYgMa-fn5Hl29HzE-kJ7HdZHdS1mhgGcLe-53zTgK2CQm01R87JCqM9RtZDAiwnch0B7OT-JPZCqBOZBdZ3eVqp3CvDiSefz_MPBzheicRit7cx3rUuPO3xPt-LIRaWoWDCiB9i2uu-lVtrliQBPcFO892IxkW9UdEN-GkA_UHOHbCDwmyNDpG_0xe5WHB-gBIhWaxqbQwxHvzoKZv2n8L0zRZlM7xtJqWuN1jrp91eESF79kg&sig=Cg0ArKJSzCEf-6PcPmaV&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.teamviewer.com/en-us/platform/one/%3Futm_source%3Dprogrammatic%26utm_medium%3Dcpm%26utm_campaign%3Dus%7Cb%7Cpr%7C26%7Capril%7CTeamviewerone-smb-mofu%7Cfree%7Ct0%7C0%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23755301217
            - img "Advertisement" [ref=f7e5]
          - generic [ref=f7e6]:
            - generic:
              - img [ref=f7e10] [cursor=pointer]
              - button [ref=f7e14] [cursor=pointer]:
                - img [ref=f7e15]
      - iframe [ref=e152]:
        - generic [ref=f4e2]:
          - link "Advertisement" [ref=f4e4] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsu8b2yFqOlBrcxHh1wz6PGvn89rAX3cRBP7GWAnfOes5kRmX038lvaXHjv8evefz43Rl1O2Obf1JKU5_5xHLdvZK__7xO1zYV2ZhmKT0DSKMQR7CjTJWmh7rF9YC_6IoauKG6F355Ojufw6q-7PSI1dCn5hoFcbYjUvPHX8ZhF3ZMpK4agaOdKYSdQOAlm5VhmJEkbKkMV-fuCamm3Tqi-ayOwD6tgGAuiBIs4M_OniSaEvJo5u1ngwUUT1BmN6cpSA9iSYclrW7C68C--VsVp3C9bbzSgzHlm9lHbyxLk_5kI1Lq-zDkNC9Zq-wk2UdlMJhwCsIWyX09F-CseDvcS8y7-MjiEeHoAxKNsnikLA8Jiinm70t3AEwYb6tnaxiv770RwOG5y_CuI1YHX0ZxSZUULDdCUDLCKRirIuDASAhdYlMgNH8Q2AZmVBGWX9hOBGv1r_OTRUqmYpnLHPZEARB9gQVsTONmdjjGPZcxf_ptqM-_RKkMNrsyGlKYtHhsoCU8sK0QcIKZbJvJhSqg-YZuRrILg0LhHXv1WWOS-HpF5eXa3mCetSTDehWQ9OrztWok_maxDiT9UNv2fY6sm9wQcl0gbndzozvVWRgrR2GoM1A7gfrXYTxlAvGSYgP2MxkLcA7_G3126wJhAi562UcfmiHhQEB5VUf2wKCBEdMxgiKXkE8tRKCbMOSGaNBUNlE466CRJHF0Ib4g11Cpa77BcbkH4mGWlMIu5vZxf3-9Fa2zJVS7XtxvAR6zPHlE2sLpHIWcXoYdsb5zkm1jMSAMZszWrBnt93OQAmS-4ea64IBVgsgW3l5j_88jJP3rdPjlXAMnrdJ3qcf8pmMpWQ6iw2cSQeVpiYPYk_fxLkqFJIu2UvgYVMKnkRsRBaKk_qDkP-T90U38YvI9g-3QYa_MKwEd5SJ4qxkmAQxhs_iVI8vu387cPUAnJRV5q3uEABs-p78vL17s4bi54tCsQ_ry-sFYnQC2dkxPrdhaxRCN21ItEh-zMKSIbQYYB0aIGYhYzHtgHFt5qdVhRbULf2VPwMD8qr2SZB-9uIRgDqnQoeKbZb1N4EQLqrs0VyJ6jRqh5NtB45CnoJs3wslFVPliHWItfX-C_SnRliVbJg3CWWQu_HTetKdfmopv5l_lEwd_ySYtZ8e3X5GhVUasbUVn-zWT8MKAKUstwWVbAjYEihHMitDAkVwDISgABXdWh8cwlWe3IzYRLwn23_pxFQeOvFjdoQhIDa6T0LkCgKRStOO1g_p5bl7qbCtxXFQ3YQ7MMDt35Wm0snjxCY7I-4zPSmQ7r_NbyPbBh-Hn0eiA4KN91o5zRdrQFDPWoAI74qhvxJWK5wtuetNmez38Y6_d7jd_bD_mcqV-w4OIxdSW9Fv9s9NKtofhdfgVzUJSiMIIXFhm0FY1mSYuMpgmuHSm660j5-4HYZ8rKXP1c1PwI1zq4rMmqxTycA-cTxYqEsafCUEeOoi2RqhxVmRYsAcO5qWwzJ0DtSS_iJhD5TIICUZ87d55c8dGbK24fb8S744Rd5BfPBJ7PZXBYKzgRKKFlwnbA-ER1d5ZVhuCX8gX8PJ5sFkiFXhOSfUma3ZYnuk6VuyUQ89m90CoQyFQJsE35GC-RQNH7LlkH10SE4THVdexsUX5RzGGpbkrIM4bkqUaAJlZF7DUt2CBwEPt5dvjqVAZuTtRt1JRC2VhuCoR7yPENYgOQjdEhGQoZfeELN1_IWH__ayuym6XzlWvGqQUZWJI8YJuejn6uSwJYhCoEAzMPTrsP_f0h9XXd6yhOkXDQ0mXCQc-tRmjovQ5_zwIAfvU_oxBaauZhJvwUl7E3FRYS8_pED0K6j2IovvvLnXiYbSa035yydJQkLUE4&sai=AMfl-YQaENiCm0vWkUgLyYtMqVSA1tYOZQuuwAZQ23ffiCdGf1xRQpataihe7drNFLyur8N69Y7leZfcgNFMtfkV7uTWJa3p4c831gEFTOAe9spswQHtxbyXwDguyoZH7Yz9V051cWi2BKCra22l6Vff7SDZ7FSh3lv4SBd65jQoJO3tscCxzY4Gc8gUHVoh0McrWJoqpR0bGBvUq8q6BYFBhijcSmEITQB7iWnjQRgtqFidGiqAnu_l1VsxYnfX3kUFnlb5mlgsZMnl7rgR78T9Xsb4-CoMrgPxcEHPn-2C80asEfD_OWO7CKURHYTK3cl_HdeoUioKJbF9x3N5I5rjHvbHzB9EP25DlUTF94zxNmgNPPocGt27fRFe71wleeE3vKvCmwtYrT2lNEEWTOBnObxp5rxSIx_knEn0Yl3LxFFZl5ng14yCDLdwQKS9MrkFnl3qQf6wqBvHVwZFWi4v50k0ARc7kVlTceFIZXjOaptT3VAoNERolbSO6xL4isz19mEBBraJhOZNrjeStfJ2mrbMvNnwhINC7bolmxgYvtkFR1fokugbhmtIktBimYhedASqL-EGLdYa3da3UeVqTPn_JoSnRYi4DfrRZbJk0PA-dLPDPyDWYfGuO2joUB7_h9gXPnvrSz6yqlZxUeCvF88Rwoa_qOUb1VfsCuMMCnSier174siVDcIF93rP99zsR-ZrrubSONPuH3AylxA66ruFLAWrWhpMPZX-xu9VHEaIKn-Vg5h3bMNJDAvGmlj_PM1cRcUPQWT3YIeGCxcQZ8K3Za4Rzu-IdQ4vgpv8T2Ok8mtk3RoTFsX0FJT7nlPCmTjcRpuLcqUuT778yOf6E9FINb9f50iOTWSqXXzAToniuOKJggM-DNa3Ivvo1u83PE6Oz4NFcngJOmvrZmsNxzw&sig=Cg0ArKJSzPYA-74fT-E1&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://www.teamviewer.com/en-us/platform/one/%3Futm_source%3Dprogrammatic%26utm_medium%3Dcpm%26utm_campaign%3Dus%7Cb%7Cpr%7C26%7Capril%7CTeamviewerone-smb-mofu%7Cfree%7Ct0%7C0%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23755301217
            - img "Advertisement" [ref=f4e5]
          - generic [ref=f4e6]:
            - generic:
              - img [ref=f4e10] [cursor=pointer]
              - button [ref=f4e14] [cursor=pointer]:
                - img [ref=f4e15]
  - contentinfo [ref=e153]:
    - generic [ref=e154]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('https://demoqa.com/checkbox', {
  5  |     waitUntil: 'domcontentloaded',
  6  |   });
  7  |   await page.locator('.rc-tree-switcher').click();
  8  |   await page
  9  |     .getByRole('checkbox', { name: 'Select Desktop' })
> 10 |     .click({ force: true });
     |      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  11 | 
  12 |   const resultBlock = page.locator('#result');
  13 | 
  14 |   await expect(resultBlock).toContainText('desktop');
  15 |   await expect(resultBlock).toContainText('notes');
  16 |   await expect(resultBlock).toContainText('commands');
  17 | });
  18 | 
```