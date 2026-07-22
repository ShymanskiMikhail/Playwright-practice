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
        - generic [active] [ref=f6e1]:
          - generic [ref=f6e4]:
            - link [ref=f6e5] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CZCHweCxgau_lKK250_wPyYyMmQLIwfOTggHhxLa_8xSPqeaSjw4QASDG-9Z5YMmGgIDspMQRoAHam4GqKsgBCeACAKgDAcgDCqoEhAJP0Flbb-iqDKxudirqxyl4IOuJw-NG-loTAbV-9mNRNUnISV_lU7DwC7ld7Izmr9jl4orMsVVmrPRfnypya9c5XgFLietpltLoy7i3bMUqvrckzM1uPnZXAMSKZ7H_gAII7iArYFHyva-LYcSW-z3W0BNyeLJ_djlSHN7Wl1btGD1sf_zq-8RPLccMah1if_2EEVBjYTz33_LCLhjzFdeaiZgi-Ztxvu6K7zn7rRp0QAiGhTuX4LcFQE2zH8x-blOhkzJLkITUIR8dItDtm6DbeK2qzOLPgiZYdwaIS8kVC3ZxM7Su1o34FVlpu7otz4gn_BeFq3PY7739_yT6C5m4K2F5EsAE3LGT8bcF4AQBiAXv4aDCTaAGLoAH2tPRiQWoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpY_rnP9J_llQNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJxMjd4wTIYQqACgOYCwHICwGADAGqDQJVU8gNAeINEwiu9M_0n-WVAxWt3JQJHUkGIyPqDRMI-srQ9J_llQMVrdyUCR1JBiMj8A0CiA7___________8B2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAMgzB0ESCjYxNjg1NzY1MDUYAbIYCRICqF0YLiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE&num=1&cid=CAQShwIAEQoqga_zzuvpkT89FKRpnoqFW2OpcwyCxG67d3ucsJ9GE2HTAi-7HrEuWD3LqfW1TpF5RiWm6dO3dGI-WwssUChbviyWEhJ8emDhynNfNufz2QZKTmA64Z8T78hMNl33Hr6lzPX6jXjPd0KNBfCL3BN4x5bLPswblA4zsRCGAUzu5hniSHkRBDmstL1YFODGtTlyLjRlALdVa8WWZNcfXX70_FHHIOlswIrMfLLt_xQW0rIJ4SLFo1uyWComilgUCsIQIdXbPxeN3DWTZm_kp6-rK2-yg8uvjjNA7vHEICf4XVcrdkY4lNQEXIxSM8DjEgee38tzL_o5wdPcMWUxNenQjgDl9xgB&sig=AOD64_3jijbA2tdL-3uC59pLLHnIK0plqA&client=ca-pub-4573231550355221&rf=4&nb=9&adurl=https://metricunitconverter.com/aw-dhy2%3Futm_campaign%3D20808478959%26utm_custom1%3D186799937756%26utm_term%3D%26utm_content%3D778443337835%26utm_custom2%3Ddemoqa.com%26utm_custom3%3D%26utm_custom4%3Dd%26utm_source%3DGoogle%26gad_source%3D5%26gad_campaignid%3D20808478959%26gclid%3DEAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE
              - img [ref=f6e6]
            - generic [ref=f6e8]:
              - generic [ref=f6e11]:
                - link "Click here to continue" [ref=f6e15] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CZCHweCxgau_lKK250_wPyYyMmQLIwfOTggHhxLa_8xSPqeaSjw4QASDG-9Z5YMmGgIDspMQRoAHam4GqKsgBCeACAKgDAcgDCqoEhAJP0Flbb-iqDKxudirqxyl4IOuJw-NG-loTAbV-9mNRNUnISV_lU7DwC7ld7Izmr9jl4orMsVVmrPRfnypya9c5XgFLietpltLoy7i3bMUqvrckzM1uPnZXAMSKZ7H_gAII7iArYFHyva-LYcSW-z3W0BNyeLJ_djlSHN7Wl1btGD1sf_zq-8RPLccMah1if_2EEVBjYTz33_LCLhjzFdeaiZgi-Ztxvu6K7zn7rRp0QAiGhTuX4LcFQE2zH8x-blOhkzJLkITUIR8dItDtm6DbeK2qzOLPgiZYdwaIS8kVC3ZxM7Su1o34FVlpu7otz4gn_BeFq3PY7739_yT6C5m4K2F5EsAE3LGT8bcF4AQBiAXv4aDCTaAGLoAH2tPRiQWoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpY_rnP9J_llQNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJxMjd4wTIYQqACgOYCwHICwGADAGqDQJVU8gNAeINEwiu9M_0n-WVAxWt3JQJHUkGIyPqDRMI-srQ9J_llQMVrdyUCR1JBiMj8A0CiA7___________8B2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAMgzB0ESCjYxNjg1NzY1MDUYAbIYCRICqF0YLiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE&num=1&cid=CAQShwIAEQoqga_zzuvpkT89FKRpnoqFW2OpcwyCxG67d3ucsJ9GE2HTAi-7HrEuWD3LqfW1TpF5RiWm6dO3dGI-WwssUChbviyWEhJ8emDhynNfNufz2QZKTmA64Z8T78hMNl33Hr6lzPX6jXjPd0KNBfCL3BN4x5bLPswblA4zsRCGAUzu5hniSHkRBDmstL1YFODGtTlyLjRlALdVa8WWZNcfXX70_FHHIOlswIrMfLLt_xQW0rIJ4SLFo1uyWComilgUCsIQIdXbPxeN3DWTZm_kp6-rK2-yg8uvjjNA7vHEICf4XVcrdkY4lNQEXIxSM8DjEgee38tzL_o5wdPcMWUxNenQjgDl9xgB&sig=AOD64_3jijbA2tdL-3uC59pLLHnIK0plqA&client=ca-pub-4573231550355221&rf=4&nb=0&adurl=https://metricunitconverter.com/aw-dhy2%3Futm_campaign%3D20808478959%26utm_custom1%3D186799937756%26utm_term%3D%26utm_content%3D778443337835%26utm_custom2%3Ddemoqa.com%26utm_custom3%3D%26utm_custom4%3Dd%26utm_source%3DGoogle%26gad_source%3D5%26gad_campaignid%3D20808478959%26gclid%3DEAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE
                - link "Click here to continue" [ref=f6e19] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CZCHweCxgau_lKK250_wPyYyMmQLIwfOTggHhxLa_8xSPqeaSjw4QASDG-9Z5YMmGgIDspMQRoAHam4GqKsgBCeACAKgDAcgDCqoEhAJP0Flbb-iqDKxudirqxyl4IOuJw-NG-loTAbV-9mNRNUnISV_lU7DwC7ld7Izmr9jl4orMsVVmrPRfnypya9c5XgFLietpltLoy7i3bMUqvrckzM1uPnZXAMSKZ7H_gAII7iArYFHyva-LYcSW-z3W0BNyeLJ_djlSHN7Wl1btGD1sf_zq-8RPLccMah1if_2EEVBjYTz33_LCLhjzFdeaiZgi-Ztxvu6K7zn7rRp0QAiGhTuX4LcFQE2zH8x-blOhkzJLkITUIR8dItDtm6DbeK2qzOLPgiZYdwaIS8kVC3ZxM7Su1o34FVlpu7otz4gn_BeFq3PY7739_yT6C5m4K2F5EsAE3LGT8bcF4AQBiAXv4aDCTaAGLoAH2tPRiQWoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpY_rnP9J_llQNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJxMjd4wTIYQqACgOYCwHICwGADAGqDQJVU8gNAeINEwiu9M_0n-WVAxWt3JQJHUkGIyPqDRMI-srQ9J_llQMVrdyUCR1JBiMj8A0CiA7___________8B2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAMgzB0ESCjYxNjg1NzY1MDUYAbIYCRICqF0YLiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE&num=1&cid=CAQShwIAEQoqga_zzuvpkT89FKRpnoqFW2OpcwyCxG67d3ucsJ9GE2HTAi-7HrEuWD3LqfW1TpF5RiWm6dO3dGI-WwssUChbviyWEhJ8emDhynNfNufz2QZKTmA64Z8T78hMNl33Hr6lzPX6jXjPd0KNBfCL3BN4x5bLPswblA4zsRCGAUzu5hniSHkRBDmstL1YFODGtTlyLjRlALdVa8WWZNcfXX70_FHHIOlswIrMfLLt_xQW0rIJ4SLFo1uyWComilgUCsIQIdXbPxeN3DWTZm_kp6-rK2-yg8uvjjNA7vHEICf4XVcrdkY4lNQEXIxSM8DjEgee38tzL_o5wdPcMWUxNenQjgDl9xgB&sig=AOD64_3jijbA2tdL-3uC59pLLHnIK0plqA&client=ca-pub-4573231550355221&rf=4&nb=7&adurl=https://metricunitconverter.com/aw-dhy2%3Futm_campaign%3D20808478959%26utm_custom1%3D186799937756%26utm_term%3D%26utm_content%3D778443337835%26utm_custom2%3Ddemoqa.com%26utm_custom3%3D%26utm_custom4%3Dd%26utm_source%3DGoogle%26gad_source%3D5%26gad_campaignid%3D20808478959%26gclid%3DEAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE
              - generic [ref=f6e22]:
                - link:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CZCHweCxgau_lKK250_wPyYyMmQLIwfOTggHhxLa_8xSPqeaSjw4QASDG-9Z5YMmGgIDspMQRoAHam4GqKsgBCeACAKgDAcgDCqoEhAJP0Flbb-iqDKxudirqxyl4IOuJw-NG-loTAbV-9mNRNUnISV_lU7DwC7ld7Izmr9jl4orMsVVmrPRfnypya9c5XgFLietpltLoy7i3bMUqvrckzM1uPnZXAMSKZ7H_gAII7iArYFHyva-LYcSW-z3W0BNyeLJ_djlSHN7Wl1btGD1sf_zq-8RPLccMah1if_2EEVBjYTz33_LCLhjzFdeaiZgi-Ztxvu6K7zn7rRp0QAiGhTuX4LcFQE2zH8x-blOhkzJLkITUIR8dItDtm6DbeK2qzOLPgiZYdwaIS8kVC3ZxM7Su1o34FVlpu7otz4gn_BeFq3PY7739_yT6C5m4K2F5EsAE3LGT8bcF4AQBiAXv4aDCTaAGLoAH2tPRiQWoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpY_rnP9J_llQNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJxMjd4wTIYQqACgOYCwHICwGADAGqDQJVU8gNAeINEwiu9M_0n-WVAxWt3JQJHUkGIyPqDRMI-srQ9J_llQMVrdyUCR1JBiMj8A0CiA7___________8B2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAMgzB0ESCjYxNjg1NzY1MDUYAbIYCRICqF0YLiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE&num=1&cid=CAQShwIAEQoqga_zzuvpkT89FKRpnoqFW2OpcwyCxG67d3ucsJ9GE2HTAi-7HrEuWD3LqfW1TpF5RiWm6dO3dGI-WwssUChbviyWEhJ8emDhynNfNufz2QZKTmA64Z8T78hMNl33Hr6lzPX6jXjPd0KNBfCL3BN4x5bLPswblA4zsRCGAUzu5hniSHkRBDmstL1YFODGtTlyLjRlALdVa8WWZNcfXX70_FHHIOlswIrMfLLt_xQW0rIJ4SLFo1uyWComilgUCsIQIdXbPxeN3DWTZm_kp6-rK2-yg8uvjjNA7vHEICf4XVcrdkY4lNQEXIxSM8DjEgee38tzL_o5wdPcMWUxNenQjgDl9xgB&sig=AOD64_3jijbA2tdL-3uC59pLLHnIK0plqA&client=ca-pub-4573231550355221&rf=4&nb=8&adurl=https://metricunitconverter.com/aw-dhy2%3Futm_campaign%3D20808478959%26utm_custom1%3D186799937756%26utm_term%3D%26utm_content%3D778443337835%26utm_custom2%3Ddemoqa.com%26utm_custom3%3D%26utm_custom4%3Dd%26utm_source%3DGoogle%26gad_source%3D5%26gad_campaignid%3D20808478959%26gclid%3DEAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE
                - link "Metric Unit Converter" [ref=f6e24] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CZCHweCxgau_lKK250_wPyYyMmQLIwfOTggHhxLa_8xSPqeaSjw4QASDG-9Z5YMmGgIDspMQRoAHam4GqKsgBCeACAKgDAcgDCqoEhAJP0Flbb-iqDKxudirqxyl4IOuJw-NG-loTAbV-9mNRNUnISV_lU7DwC7ld7Izmr9jl4orMsVVmrPRfnypya9c5XgFLietpltLoy7i3bMUqvrckzM1uPnZXAMSKZ7H_gAII7iArYFHyva-LYcSW-z3W0BNyeLJ_djlSHN7Wl1btGD1sf_zq-8RPLccMah1if_2EEVBjYTz33_LCLhjzFdeaiZgi-Ztxvu6K7zn7rRp0QAiGhTuX4LcFQE2zH8x-blOhkzJLkITUIR8dItDtm6DbeK2qzOLPgiZYdwaIS8kVC3ZxM7Su1o34FVlpu7otz4gn_BeFq3PY7739_yT6C5m4K2F5EsAE3LGT8bcF4AQBiAXv4aDCTaAGLoAH2tPRiQWoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpY_rnP9J_llQNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJxMjd4wTIYQqACgOYCwHICwGADAGqDQJVU8gNAeINEwiu9M_0n-WVAxWt3JQJHUkGIyPqDRMI-srQ9J_llQMVrdyUCR1JBiMj8A0CiA7___________8B2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAMgzB0ESCjYxNjg1NzY1MDUYAbIYCRICqF0YLiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE&num=1&cid=CAQShwIAEQoqga_zzuvpkT89FKRpnoqFW2OpcwyCxG67d3ucsJ9GE2HTAi-7HrEuWD3LqfW1TpF5RiWm6dO3dGI-WwssUChbviyWEhJ8emDhynNfNufz2QZKTmA64Z8T78hMNl33Hr6lzPX6jXjPd0KNBfCL3BN4x5bLPswblA4zsRCGAUzu5hniSHkRBDmstL1YFODGtTlyLjRlALdVa8WWZNcfXX70_FHHIOlswIrMfLLt_xQW0rIJ4SLFo1uyWComilgUCsIQIdXbPxeN3DWTZm_kp6-rK2-yg8uvjjNA7vHEICf4XVcrdkY4lNQEXIxSM8DjEgee38tzL_o5wdPcMWUxNenQjgDl9xgB&sig=AOD64_3jijbA2tdL-3uC59pLLHnIK0plqA&client=ca-pub-4573231550355221&rf=4&nb=1&adurl=https://metricunitconverter.com/aw-dhy2%3Futm_campaign%3D20808478959%26utm_custom1%3D186799937756%26utm_term%3D%26utm_content%3D778443337835%26utm_custom2%3Ddemoqa.com%26utm_custom3%3D%26utm_custom4%3Dd%26utm_source%3DGoogle%26gad_source%3D5%26gad_campaignid%3D20808478959%26gclid%3DEAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE
                - link "Open" [ref=f6e26] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CZCHweCxgau_lKK250_wPyYyMmQLIwfOTggHhxLa_8xSPqeaSjw4QASDG-9Z5YMmGgIDspMQRoAHam4GqKsgBCeACAKgDAcgDCqoEhAJP0Flbb-iqDKxudirqxyl4IOuJw-NG-loTAbV-9mNRNUnISV_lU7DwC7ld7Izmr9jl4orMsVVmrPRfnypya9c5XgFLietpltLoy7i3bMUqvrckzM1uPnZXAMSKZ7H_gAII7iArYFHyva-LYcSW-z3W0BNyeLJ_djlSHN7Wl1btGD1sf_zq-8RPLccMah1if_2EEVBjYTz33_LCLhjzFdeaiZgi-Ztxvu6K7zn7rRp0QAiGhTuX4LcFQE2zH8x-blOhkzJLkITUIR8dItDtm6DbeK2qzOLPgiZYdwaIS8kVC3ZxM7Su1o34FVlpu7otz4gn_BeFq3PY7739_yT6C5m4K2F5EsAE3LGT8bcF4AQBiAXv4aDCTaAGLoAH2tPRiQWoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpY_rnP9J_llQNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJxMjd4wTIYQqACgOYCwHICwGADAGqDQJVU8gNAeINEwiu9M_0n-WVAxWt3JQJHUkGIyPqDRMI-srQ9J_llQMVrdyUCR1JBiMj8A0CiA7___________8B2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAMgzB0ESCjYxNjg1NzY1MDUYAbIYCRICqF0YLiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE&num=1&cid=CAQShwIAEQoqga_zzuvpkT89FKRpnoqFW2OpcwyCxG67d3ucsJ9GE2HTAi-7HrEuWD3LqfW1TpF5RiWm6dO3dGI-WwssUChbviyWEhJ8emDhynNfNufz2QZKTmA64Z8T78hMNl33Hr6lzPX6jXjPd0KNBfCL3BN4x5bLPswblA4zsRCGAUzu5hniSHkRBDmstL1YFODGtTlyLjRlALdVa8WWZNcfXX70_FHHIOlswIrMfLLt_xQW0rIJ4SLFo1uyWComilgUCsIQIdXbPxeN3DWTZm_kp6-rK2-yg8uvjjNA7vHEICf4XVcrdkY4lNQEXIxSM8DjEgee38tzL_o5wdPcMWUxNenQjgDl9xgB&sig=AOD64_3jijbA2tdL-3uC59pLLHnIK0plqA&client=ca-pub-4573231550355221&rf=4&nb=8&adurl=https://metricunitconverter.com/aw-dhy2%3Futm_campaign%3D20808478959%26utm_custom1%3D186799937756%26utm_term%3D%26utm_content%3D778443337835%26utm_custom2%3Ddemoqa.com%26utm_custom3%3D%26utm_custom4%3Dd%26utm_source%3DGoogle%26gad_source%3D5%26gad_campaignid%3D20808478959%26gclid%3DEAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE
                - link [ref=f6e27] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CZCHweCxgau_lKK250_wPyYyMmQLIwfOTggHhxLa_8xSPqeaSjw4QASDG-9Z5YMmGgIDspMQRoAHam4GqKsgBCeACAKgDAcgDCqoEhAJP0Flbb-iqDKxudirqxyl4IOuJw-NG-loTAbV-9mNRNUnISV_lU7DwC7ld7Izmr9jl4orMsVVmrPRfnypya9c5XgFLietpltLoy7i3bMUqvrckzM1uPnZXAMSKZ7H_gAII7iArYFHyva-LYcSW-z3W0BNyeLJ_djlSHN7Wl1btGD1sf_zq-8RPLccMah1if_2EEVBjYTz33_LCLhjzFdeaiZgi-Ztxvu6K7zn7rRp0QAiGhTuX4LcFQE2zH8x-blOhkzJLkITUIR8dItDtm6DbeK2qzOLPgiZYdwaIS8kVC3ZxM7Su1o34FVlpu7otz4gn_BeFq3PY7739_yT6C5m4K2F5EsAE3LGT8bcF4AQBiAXv4aDCTaAGLoAH2tPRiQWoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDIIgGEQARgdMgiKgoCAgICACDoPgECAwICAgICogAKog5AQSL39wTpY_rnP9J_llQNgAfIIG2FkeC1zdWJzeW4tMzUyMDYxNzM0MTY2NTU5MrEJxMjd4wTIYQqACgOYCwHICwGADAGqDQJVU8gNAeINEwiu9M_0n-WVAxWt3JQJHUkGIyPqDRMI-srQ9J_llQMVrdyUCR1JBiMj8A0CiA7___________8B2BMMiBQB0BUByhYCCgD4FgGAFwGyFxAYASoKNjE2ODU3NjUwNVAGuhcCOAGqGBcJAAAAAMgzB0ESCjYxNjg1NzY1MDUYAbIYCRICqF0YLiIBANAYAcIZAggB&ae=1&gclid=EAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE&num=1&cid=CAQShwIAEQoqga_zzuvpkT89FKRpnoqFW2OpcwyCxG67d3ucsJ9GE2HTAi-7HrEuWD3LqfW1TpF5RiWm6dO3dGI-WwssUChbviyWEhJ8emDhynNfNufz2QZKTmA64Z8T78hMNl33Hr6lzPX6jXjPd0KNBfCL3BN4x5bLPswblA4zsRCGAUzu5hniSHkRBDmstL1YFODGtTlyLjRlALdVa8WWZNcfXX70_FHHIOlswIrMfLLt_xQW0rIJ4SLFo1uyWComilgUCsIQIdXbPxeN3DWTZm_kp6-rK2-yg8uvjjNA7vHEICf4XVcrdkY4lNQEXIxSM8DjEgee38tzL_o5wdPcMWUxNenQjgDl9xgB&sig=AOD64_3jijbA2tdL-3uC59pLLHnIK0plqA&client=ca-pub-4573231550355221&rf=4&nb=8&adurl=https://metricunitconverter.com/aw-dhy2%3Futm_campaign%3D20808478959%26utm_custom1%3D186799937756%26utm_term%3D%26utm_content%3D778443337835%26utm_custom2%3Ddemoqa.com%26utm_custom3%3D%26utm_custom4%3Dd%26utm_source%3DGoogle%26gad_source%3D5%26gad_campaignid%3D20808478959%26gclid%3DEAIaIQobChMI74HR9J_llQMVrdyUCR1JBiMjEAEYASAAEgLkavD_BwE
                  - generic [ref=f6e29]:
                    - img [ref=f6e30]
                    - img [ref=f6e32]
          - generic [ref=f6e37]:
            - link [ref=f6e39] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXOIBo9V1pfpOPbGew1OLF3F70JZ1fhu1vslHGZttyAm5pswNIzrY50o70rbKEuItn70VrLgPw_vzrCPqu7UI7shc_zJvwj9fpsGaFwVDMVwhMrA5s8VWjqVLdeWlYeCHCtIF3sp1PjpXZEGfI-CCR_LPrZFPmVW-vTp8mhj0VVnGI6wlcCHJmSFOFWfi2JNTuHP7A11WuwOL3-0z7XIb_olB59iUfxp84_8DCdUfSaMUEGMZthySUQZeHm2Nx1yjoMWacpN9rVeoYyqT51iUnP0w5RRZRderkKJvIn_ogMjuId8gpxx31m4g0M-LatlyFpxInzRXJGFirUpJjuyt9COOKtYtwsU25ShTBPhn2uUJ1xMWvdTK7hNPvT-SCrrTmiM89rLbl6MEWEnNfTLMDgfYy0KU_WQzikwS1p2ikRG53GcJCuVzPe01NfC8Kmsa7N8MJ1CvT57bMqjT7QFBng6D3sDcZueB0yI2yAFLjH4KYn-uSuFaFWtNiLTKx_FOV8XG_-V7uU3oB74J6p65XaxZvHpwRiU2J3a943YrVyOIZfVDmjm8KK3hYhR_YcvrljcY-ywFI1RjPkZUeKXxMa7z_D5BYGszEWTgVAdKrgufpl7n14TEKbzsXD3HlOB-a7dBQd5zaw3Kbi294yv-tAR3ablfT7dInForr8YZeOrdeT7a-Y4-cQy7AOL0HJD9K19bQsA7CTlTY86qZiLOZmQ-rRS4c7mlwFzHgkqDsnDfNdkKc2L2xAwmuKsBLu2VxFhOIa6EFdrGKDJcEv16jKpcCJR4gg40U1Enu8s2CsJs4BqKflOJbMXigwhnzNCIO9obRoXPL6PcgSkT4VnqLssWnM8WjQ2d0cWRsMkpDS3WOwk9Ioe280C6B70ullQ2mUijwBoUSxy60Fke4KGyyv1rM13iyojvsyPH4hlFb8spvp5WTTH6qjR8ADxZgtmTXLYdYqxwz6j2dhWkJF_N_2-5kS2M4KatB6GEGNR73O_eYNbg8gJfHk9u7D-KWBSK5e_iXH6IN-WThRPSG9JOAD_PZRyl6fG0oHQh-MPlNzqcvGPjnX53nzKB3e-XHNtzx1pz-rNr0SpoAXKGA8DCigMzGaCVxwf-HjHPVqJKVTO3DSmcei34DTQV0Qlo1LHKcenpWWyX0maIx2So1QegTeojEYa39WLGkIKXB-YGeq2W1jFzllQHj5mwBDmYjjM4X4IySZIi6tk7mfrBJKCLg6NpB29Rs47kuJPZuAQ9ZXw_AY7z8EDY5szeJNXA4IFzhbVLMgvi5djqr4pQY5V7LjMHYRYrgXdK-VfR9RXLdL_N92WgbjotEUGCiI9it96HZU_imww6rZ-GekLHmWgvlryvUAbgw7VewEzxBxWJc_lWlPGQ3MqxVX0jOn_BmEWpfZ_Lsm2TFv1amx6Z_tU_fGltXBW4QWV41RsKT49yjg_uWBk5rq9zRhfZvqRdCOz_62Bkz_r8rhCnTW_h-YK69sd-00l0Jdky78QTaVG7sRUufd9R0J0Va_Dyx8bWRMP5IzGrzCdJBgJGahepAzJAAUiLUrRfFRzCGPhXwYTDduIfJUtc4KWJOgGP-LASiKut9WC3KMFezDJOcNCC26syJ_dnMht0BSZct7_czQ-ZOzfkYL4AzXYUs3IaT_rEABNSbCodvxLIKd25ElF3YhegwSKyYM2E-2l32P97lgmtLcqGTSe1-74LA3UaZOn7rSt-wowO2JIe6Ziuf0nIqHbuHBV7xzJQPjXbptklbd7VV39cpvA7sG8WbzweQPqNi9CsRkAsuVzfxkAabFxs9414N7lhhb3bC5TPSM8_WWAjupxs_sruQtB2s2Rm6jrkGFezfiXNaFPb3Gq6zKxntjEft7_87n7eTKeIwxv54GA6_WRwQjzXTA-NvhrJEb9yE-Aneqr9EZ2DZGp1fmpjUdjpgJaAA0JDC_kJelUI9SRQCwWI1Q9t_TyY1R2hQ8bVRr4ptE0NtUs7l4d3kqeLIQYP-Bwm7k-GywZbT7KcxVvVuT66bV57veFG9qLgZsRs8iU6noJvK3FA9PEt3jl0W25ANgpp9tLrPY8pGruhUpUA020AtmFmNopus807RBWKRM_eBFMHfbDa4o8AOd5c2M6LBl3M_Q-s6J7RG9Ti6DD7VPPAF-G_Yl9S4j4K_KzdRPgi1PebQTQKUJMaLVEQFGxmA26fHBWNJOSFEO653JvHordG1tmFifHjWaZZ3Gaq7oltSw2gl3KxmNdUGTOx9Lw1KACu8Nf_wPXFzmsMGcRnklA7ug-Um17mnE19E5AhY98zZhoJeIjdob8Xbt0f5znp8A5G5seOBg0ruL9b2gibSvW8VM7fWmvJCZQXk1oAnYi0YLiSXeykDsHuOd9oIfzYlH8NiZqeD62dFRvjL8i86TQpe1QxEKpqRdOIG0mkXXKipaMzJft0ucI59YSozoArt7rrJqH7X1yD6Wf5QnFyg7N63MK6ygeiJRcUGRj28_GYXBSmNnw6YRz2We7NvllZ6QwXldd0a3mQ7-a0dGeX7k5SdiZ1qk_lNezwRqXePr4F4jKxYzPBDLGUtGjeSyck-ME4l6mrb7K5XZvI2KSzowebd4-O9UpZkkG1afgn0pFbCIN7ejoUmCIgXC4YjJq1Su9wnsaMO0x32peQ8jHYFX9C9bMtou5CMo4YyHG2JK-IqDWltOaRxiYPjHMhlh1dKo0arJNmacA0OIDwzX-BlT9uHSCds1tMlJRxOPAGh049F9FJCO496oAPl4zJ2P2O7dfWi1BMe3BwV0ibmcQf-BWPC5tXBlBXnWRob036RGzOpXW6FQeVQI0PApWbD7LjNEoWcP6qobAcMrik_PDoKmMNP7EqPeHj7dAFqSAwNPYw7LBb3LsKCGtV2G3xRLkXLbSYfSCLTU9jOMYG4uZ1CwfG0gc92vPMapQ0vuCJtSlr0sv3Rz-_MBE4TbwHIqv3rOS6E0zjXV27eohoEdZrA5x0IKgHICMk5vQpME9UydQStD6z3QLXfG4dH8MYbB7q0ImXne2Q70FCH1ZqRAS7s26soK7Czi07mt7C7hbEunY402YkkwXRAOP9wLRM6Y8s60dD-CLfJtW5vPGHb4&opi=122715837
              - img [ref=f6e41]
            - link [ref=f6e43] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXOIBo9V1pfpOPbGew1OLF3F70JZ1fhu1vslHGZttyAm5pswNIzrY50o70rbKEuItn70VrLgPw_vzrCPqu7UI7shc_zJvwj9fpsGaFwVDMVwhMrA5s8VWjqVLdeWlYeCHCtIF3sp1PjpXZEGfI-CCR_LPrZFPmVW-vTp8mhj0VVnGI6wlcCHJmSFOFWfi2JNTuHP7A11WuwOL3-0z7XIb_olB59iUfxp84_8DCdUfSaMUEGMZthySUQZeHm2Nx1yjoMWacpN9rVeoYyqT51iUnP0w5RRZRderkKJvIn_ogMjuId8gpxx31m4g0M-LatlyFpxInzRXJGFirUpJjuyt9COOKtYtwsU25ShTBPhn2uUJ1xMWvdTK7hNPvT-SCrrTmiM89rLbl6MEWEnNfTLMDgfYy0KU_WQzikwS1p2ikRG53GcJCuVzPe01NfC8Kmsa7N8MJ1CvT57bMqjT7QFBng6D3sDcZueB0yI2yAFLjH4KYn-uSuFaFWtNiLTKx_FOV8XG_-V7uU3oB74J6p65XaxZvHpwRiU2J3a943YrVyOIZfVDmjm8KK3hYhR_YcvrljcY-ywFI1RjPkZUeKXxMa7z_D5BYGszEWTgVAdKrgufpl7n14TEKbzsXD3HlOB-a7dBQd5zaw3Kbi294yv-tAR3ablfT7dInForr8YZeOrdeT7a-Y4-cQy7AOL0HJD9K19bQsA7CTlTY86qZiLOZmQ-rRS4c7mlwFzHgkqDsnDfNdkKc2L2xAwmuKsBLu2VxFhOIa6EFdrGKDJcEv16jKpcCJR4gg40U1Enu8s2CsJs4BqKflOJbMXigwhnzNCIO9obRoXPL6PcgSkT4VnqLssWnM8WjQ2d0cWRsMkpDS3WOwk9Ioe280C6B70ullQ2mUijwBoUSxy60Fke4KGyyv1rM13iyojvsyPH4hlFb8spvp5WTTH6qjR8ADxZgtmTXLYdYqxwz6j2dhWkJF_N_2-5kS2M4KatB6GEGNR73O_eYNbg8gJfHk9u7D-KWBSK5e_iXH6IN-WThRPSG9JOAD_PZRyl6fG0oHQh-MPlNzqcvGPjnX53nzKB3e-XHNtzx1pz-rNr0SpoAXKGA8DCigMzGaCVxwf-HjHPVqJKVTO3DSmcei34DTQV0Qlo1LHKcenpWWyX0maIx2So1QegTeojEYa39WLGkIKXB-YGeq2W1jFzllQHj5mwBDmYjjM4X4IySZIi6tk7mfrBJKCLg6NpB29Rs47kuJPZuAQ9ZXw_AY7z8EDY5szeJNXA4IFzhbVLMgvi5djqr4pQY5V7LjMHYRYrgXdK-VfR9RXLdL_N92WgbjotEUGCiI9it96HZU_imww6rZ-GekLHmWgvlryvUAbgw7VewEzxBxWJc_lWlPGQ3MqxVX0jOn_BmEWpfZ_Lsm2TFv1amx6Z_tU_fGltXBW4QWV41RsKT49yjg_uWBk5rq9zRhfZvqRdCOz_62Bkz_r8rhCnTW_h-YK69sd-00l0Jdky78QTaVG7sRUufd9R0J0Va_Dyx8bWRMP5IzGrzCdJBgJGahepAzJAAUiLUrRfFRzCGPhXwYTDduIfJUtc4KWJOgGP-LASiKut9WC3KMFezDJOcNCC26syJ_dnMht0BSZct7_czQ-ZOzfkYL4AzXYUs3IaT_rEABNSbCodvxLIKd25ElF3YhegwSKyYM2E-2l32P97lgmtLcqGTSe1-74LA3UaZOn7rSt-wowO2JIe6Ziuf0nIqHbuHBV7xzJQPjXbptklbd7VV39cpvA7sG8WbzweQPqNi9CsRkAsuVzfxkAabFxs9414N7lhhb3bC5TPSM8_WWAjupxs_sruQtB2s2Rm6jrkGFezfiXNaFPb3Gq6zKxntjEft7_87n7eTKeIwxv54GA6_WRwQjzXTA-NvhrJEb9yE-Aneqr9EZ2DZGp1fmpjUdjpgJaAA0JDC_kJelUI9SRQCwWI1Q9t_TyY1R2hQ8bVRr4ptE0NtUs7l4d3kqeLIQYP-Bwm7k-GywZbT7KcxVvVuT66bV57veFG9qLgZsRs8iU6noJvK3FA9PEt3jl0W25ANgpp9tLrPY8pGruhUpUA020AtmFmNopus807RBWKRM_eBFMHfbDa4o8AOd5c2M6LBl3M_Q-s6J7RG9Ti6DD7VPPAF-G_Yl9S4j4K_KzdRPgi1PebQTQKUJMaLVEQFGxmA26fHBWNJOSFEO653JvHordG1tmFifHjWaZZ3Gaq7oltSw2gl3KxmNdUGTOx9Lw1KACu8Nf_wPXFzmsMGcRnklA7ug-Um17mnE19E5AhY98zZhoJeIjdob8Xbt0f5znp8A5G5seOBg0ruL9b2gibSvW8VM7fWmvJCZQXk1oAnYi0YLiSXeykDsHuOd9oIfzYlH8NiZqeD62dFRvjL8i86TQpe1QxEKpqRdOIG0mkXXKipaMzJft0ucI59YSozoArt7rrJqH7X1yD6Wf5QnFyg7N63MK6ygeiJRcUGRj28_GYXBSmNnw6YRz2We7NvllZ6QwXldd0a3mQ7-a0dGeX7k5SdiZ1qk_lNezwRqXePr4F4jKxYzPBDLGUtGjeSyck-ME4l6mrb7K5XZvI2KSzowebd4-O9UpZkkG1afgn0pFbCIN7ejoUmCIgXC4YjJq1Su9wnsaMO0x32peQ8jHYFX9C9bMtou5CMo4YyHG2JK-IqDWltOaRxiYPjHMhlh1dKo0arJNmacA0OIDwzX-BlT9uHSCds1tMlJRxOPAGh049F9FJCO496oAPl4zJ2P2O7dfWi1BMe3BwV0ibmcQf-BWPC5tXBlBXnWRob036RGzOpXW6FQeVQI0PApWbD7LjNEoWcP6qobAcMrik_PDoKmMNP7EqPeHj7dAFqSAwNPYw7LBb3LsKCGtV2G3xRLkXLbSYfSCLTU9jOMYG4uZ1CwfG0gc92vPMapQ0vuCJtSlr0sv3Rz-_MBE4TbwHIqv3rOS6E0zjXV27eohoEdZrA5x0IKgHICMk5vQpME9UydQStD6z3QLXfG4dH8MYbB7q0ImXne2Q70FCH1ZqRAS7s26soK7Czi07mt7C7hbEunY402YkkwXRAOP9wLRM6Y8s60dD-CLfJtW5vPGHb4&opi=122715837
              - img [ref=f6e45]
          - img [ref=f6e48] [cursor=pointer]
          - generic [ref=f6e59]:
            - img [ref=f6e62]
            - generic [ref=f6e65]:
              - text: Ads by
              - img [ref=f6e66]
            - generic [ref=f6e69]:
              - generic [ref=f6e72] [cursor=pointer]: Ad options
              - generic [ref=f6e75] [cursor=pointer]: Send feedback
              - link [ref=f6e77] [cursor=pointer]:
                - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXOIBo9V1pfpOPbGew1OLF3F70JZ1fhu1vslHGZttyAm5pswNIzrY50o70rbKEuItn70VrLgPw_vzrCPqu7UI7shc_zJvwj9fpsGaFwVDMVwhMrA5s8VWjqVLdeWlYeCHCtIF3sp1PjpXZEGfI-CCR_LPrZFPmVW-vTp8mhj0VVnGI6wlcCHJmSFOFWfi2JNTuHP7A11WuwOL3-0z7XIb_olB59iUfxp84_8DCdUfSaMUEGMZthySUQZeHm2Nx1yjoMWacpN9rVeoYyqT51iUnP0w5RRZRderkKJvIn_ogMjuId8gpxx31m4g0M-LatlyFpxInzRXJGFirUpJjuyt9COOKtYtwsU25ShTBPhn2uUJ1xMWvdTK7hNPvT-SCrrTmiM89rLbl6MEWEnNfTLMDgfYy0KU_WQzikwS1p2ikRG53GcJCuVzPe01NfC8Kmsa7N8MJ1CvT57bMqjT7QFBng6D3sDcZueB0yI2yAFLjH4KYn-uSuFaFWtNiLTKx_FOV8XG_-V7uU3oB74J6p65XaxZvHpwRiU2J3a943YrVyOIZfVDmjm8KK3hYhR_YcvrljcY-ywFI1RjPkZUeKXxMa7z_D5BYGszEWTgVAdKrgufpl7n14TEKbzsXD3HlOB-a7dBQd5zaw3Kbi294yv-tAR3ablfT7dInForr8YZeOrdeT7a-Y4-cQy7AOL0HJD9K19bQsA7CTlTY86qZiLOZmQ-rRS4c7mlwFzHgkqDsnDfNdkKc2L2xAwmuKsBLu2VxFhOIa6EFdrGKDJcEv16jKpcCJR4gg40U1Enu8s2CsJs4BqKflOJbMXigwhnzNCIO9obRoXPL6PcgSkT4VnqLssWnM8WjQ2d0cWRsMkpDS3WOwk9Ioe280C6B70ullQ2mUijwBoUSxy60Fke4KGyyv1rM13iyojvsyPH4hlFb8spvp5WTTH6qjR8ADxZgtmTXLYdYqxwz6j2dhWkJF_N_2-5kS2M4KatB6GEGNR73O_eYNbg8gJfHk9u7D-KWBSK5e_iXH6IN-WThRPSG9JOAD_PZRyl6fG0oHQh-MPlNzqcvGPjnX53nzKB3e-XHNtzx1pz-rNr0SpoAXKGA8DCigMzGaCVxwf-HjHPVqJKVTO3DSmcei34DTQV0Qlo1LHKcenpWWyX0maIx2So1QegTeojEYa39WLGkIKXB-YGeq2W1jFzllQHj5mwBDmYjjM4X4IySZIi6tk7mfrBJKCLg6NpB29Rs47kuJPZuAQ9ZXw_AY7z8EDY5szeJNXA4IFzhbVLMgvi5djqr4pQY5V7LjMHYRYrgXdK-VfR9RXLdL_N92WgbjotEUGCiI9it96HZU_imww6rZ-GekLHmWgvlryvUAbgw7VewEzxBxWJc_lWlPGQ3MqxVX0jOn_BmEWpfZ_Lsm2TFv1amx6Z_tU_fGltXBW4QWV41RsKT49yjg_uWBk5rq9zRhfZvqRdCOz_62Bkz_r8rhCnTW_h-YK69sd-00l0Jdky78QTaVG7sRUufd9R0J0Va_Dyx8bWRMP5IzGrzCdJBgJGahepAzJAAUiLUrRfFRzCGPhXwYTDduIfJUtc4KWJOgGP-LASiKut9WC3KMFezDJOcNCC26syJ_dnMht0BSZct7_czQ-ZOzfkYL4AzXYUs3IaT_rEABNSbCodvxLIKd25ElF3YhegwSKyYM2E-2l32P97lgmtLcqGTSe1-74LA3UaZOn7rSt-wowO2JIe6Ziuf0nIqHbuHBV7xzJQPjXbptklbd7VV39cpvA7sG8WbzweQPqNi9CsRkAsuVzfxkAabFxs9414N7lhhb3bC5TPSM8_WWAjupxs_sruQtB2s2Rm6jrkGFezfiXNaFPb3Gq6zKxntjEft7_87n7eTKeIwxv54GA6_WRwQjzXTA-NvhrJEb9yE-Aneqr9EZ2DZGp1fmpjUdjpgJaAA0JDC_kJelUI9SRQCwWI1Q9t_TyY1R2hQ8bVRr4ptE0NtUs7l4d3kqeLIQYP-Bwm7k-GywZbT7KcxVvVuT66bV57veFG9qLgZsRs8iU6noJvK3FA9PEt3jl0W25ANgpp9tLrPY8pGruhUpUA020AtmFmNopus807RBWKRM_eBFMHfbDa4o8AOd5c2M6LBl3M_Q-s6J7RG9Ti6DD7VPPAF-G_Yl9S4j4K_KzdRPgi1PebQTQKUJMaLVEQFGxmA26fHBWNJOSFEO653JvHordG1tmFifHjWaZZ3Gaq7oltSw2gl3KxmNdUGTOx9Lw1KACu8Nf_wPXFzmsMGcRnklA7ug-Um17mnE19E5AhY98zZhoJeIjdob8Xbt0f5znp8A5G5seOBg0ruL9b2gibSvW8VM7fWmvJCZQXk1oAnYi0YLiSXeykDsHuOd9oIfzYlH8NiZqeD62dFRvjL8i86TQpe1QxEKpqRdOIG0mkXXKipaMzJft0ucI59YSozoArt7rrJqH7X1yD6Wf5QnFyg7N63MK6ygeiJRcUGRj28_GYXBSmNnw6YRz2We7NvllZ6QwXldd0a3mQ7-a0dGeX7k5SdiZ1qk_lNezwRqXePr4F4jKxYzPBDLGUtGjeSyck-ME4l6mrb7K5XZvI2KSzowebd4-O9UpZkkG1afgn0pFbCIN7ejoUmCIgXC4YjJq1Su9wnsaMO0x32peQ8jHYFX9C9bMtou5CMo4YyHG2JK-IqDWltOaRxiYPjHMhlh1dKo0arJNmacA0OIDwzX-BlT9uHSCds1tMlJRxOPAGh049F9FJCO496oAPl4zJ2P2O7dfWi1BMe3BwV0ibmcQf-BWPC5tXBlBXnWRob036RGzOpXW6FQeVQI0PApWbD7LjNEoWcP6qobAcMrik_PDoKmMNP7EqPeHj7dAFqSAwNPYw7LBb3LsKCGtV2G3xRLkXLbSYfSCLTU9jOMYG4uZ1CwfG0gc92vPMapQ0vuCJtSlr0sv3Rz-_MBE4TbwHIqv3rOS6E0zjXV27eohoEdZrA5x0IKgHICMk5vQpME9UydQStD6z3QLXfG4dH8MYbB7q0ImXne2Q70FCH1ZqRAS7s26soK7Czi07mt7C7hbEunY402YkkwXRAOP9wLRM6Y8s60dD-CLfJtW5vPGHb4&opi=122715837
                - generic [ref=f6e78]:
                  - text: Why this ad?
                  - img [ref=f6e79]
          - generic [ref=f6e82]:
            - generic [ref=f6e85] [cursor=pointer]: Seen this ad multiple times
            - generic [ref=f6e88] [cursor=pointer]: Ad covered content
            - generic [ref=f6e91] [cursor=pointer]: Not interested in this ad
            - generic [ref=f6e94] [cursor=pointer]: Ad was inappropriate
          - generic [ref=f6e100]: Thanks. Feedback improves Google ads
          - generic [ref=f6e106]:
            - text: Ad closed by
            - img [ref=f6e107]
          - generic [ref=f6e114]:
            - img [ref=f6e117]
            - generic [ref=f6e119]:
              - generic [ref=f6e121]: Personalize ads on this site
              - link [ref=f6e125] [cursor=pointer]:
                - /url: https://support.google.com/ads/answer/10923348
                - generic [ref=f6e126]:
                  - text: Learn more
                  - img [ref=f6e127]
  - contentinfo [ref=e147]:
    - generic [ref=e148]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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