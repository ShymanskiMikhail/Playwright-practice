# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: hw-10-locators/tables.spec.ts >> test
- Location: hw-10-locators/tables.spec.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e3]
    - generic [ref=e5]:
      - heading "Data Tables" [level=3] [ref=e6]
      - paragraph [ref=e7]: Often times when you see a table it contains data which is sortable -- sometimes with actions that can be taken within each row (e.g. edit, delete). And it can be challenging to automate interaction with sets of data in a table depending on how it is constructed.
      - heading "Example 1" [level=4] [ref=e8]
      - paragraph [ref=e9]: No Class or ID attributes to signify groupings of rows and columns
      - table [ref=e10]:
        - rowgroup [ref=e11]:
          - row "Last Name First Name Email Due Web Site Action" [ref=e12]:
            - columnheader "Last Name" [ref=e13]
            - columnheader "First Name" [ref=e14]
            - columnheader "Email" [ref=e15]
            - columnheader "Due" [ref=e16]
            - columnheader "Web Site" [ref=e17]
            - columnheader "Action" [ref=e18]
        - rowgroup [ref=e19]:
          - row "Smith John jsmith@gmail.com $50.00 http://www.jsmith.com edit delete" [ref=e20]:
            - cell "Smith" [ref=e21]
            - cell "John" [ref=e22]
            - cell "jsmith@gmail.com" [ref=e23]
            - cell "$50.00" [ref=e24]
            - cell "http://www.jsmith.com" [ref=e25]
            - cell "edit delete" [ref=e26]:
              - link "edit" [ref=e27]:
                - /url: "#edit"
              - link "delete" [ref=e28]:
                - /url: "#delete"
          - row "Bach Frank fbach@yahoo.com $51.00 http://www.frank.com edit delete" [ref=e29]:
            - cell "Bach" [ref=e30]
            - cell "Frank" [ref=e31]
            - cell "fbach@yahoo.com" [ref=e32]
            - cell "$51.00" [ref=e33]
            - cell "http://www.frank.com" [ref=e34]
            - cell "edit delete" [ref=e35]:
              - link "edit" [ref=e36]:
                - /url: "#edit"
              - link "delete" [ref=e37]:
                - /url: "#delete"
          - row "Doe Jason jdoe@hotmail.com $100.00 http://www.jdoe.com edit delete" [ref=e38]:
            - cell "Doe" [ref=e39]
            - cell "Jason" [ref=e40]
            - cell "jdoe@hotmail.com" [ref=e41]
            - cell "$100.00" [ref=e42]
            - cell "http://www.jdoe.com" [ref=e43]
            - cell "edit delete" [ref=e44]:
              - link "edit" [ref=e45]:
                - /url: "#edit"
              - link "delete" [ref=e46]:
                - /url: "#delete"
          - row "Conway Tim tconway@earthlink.net $50.00 http://www.timconway.com edit delete" [ref=e47]:
            - cell "Conway" [ref=e48]
            - cell "Tim" [ref=e49]
            - cell "tconway@earthlink.net" [ref=e50]
            - cell "$50.00" [ref=e51]
            - cell "http://www.timconway.com" [ref=e52]
            - cell "edit delete" [ref=e53]:
              - link "edit" [ref=e54]:
                - /url: "#edit"
              - link "delete" [ref=e55]:
                - /url: "#delete"
      - heading "Example 2" [level=4] [ref=e56]
      - paragraph [ref=e57]: Class and ID attributes to signify groupings of rows and columns
      - table [ref=e58]:
        - rowgroup [ref=e59]:
          - row "Last Name First Name Email Due Web Site Action" [ref=e60]:
            - columnheader "Last Name" [ref=e61]
            - columnheader "First Name" [ref=e62]
            - columnheader "Email" [ref=e63]
            - columnheader "Due" [ref=e64]
            - columnheader "Web Site" [ref=e65]
            - columnheader "Action" [ref=e66]
        - rowgroup [ref=e67]:
          - row "Smith John jsmith@gmail.com $50.00 http://www.jsmith.com edit delete" [ref=e68]:
            - cell "Smith" [ref=e69]
            - cell "John" [ref=e70]
            - cell "jsmith@gmail.com" [ref=e71]
            - cell "$50.00" [ref=e72]
            - cell "http://www.jsmith.com" [ref=e73]
            - cell "edit delete" [ref=e74]:
              - link "edit" [ref=e75]:
                - /url: "#edit"
              - link "delete" [ref=e76]:
                - /url: "#delete"
          - row "Bach Frank fbach@yahoo.com $51.00 http://www.frank.com edit delete" [ref=e77]:
            - cell "Bach" [ref=e78]
            - cell "Frank" [ref=e79]
            - cell "fbach@yahoo.com" [ref=e80]
            - cell "$51.00" [ref=e81]
            - cell "http://www.frank.com" [ref=e82]
            - cell "edit delete" [ref=e83]:
              - link "edit" [ref=e84]:
                - /url: "#edit"
              - link "delete" [ref=e85]:
                - /url: "#delete"
          - row "Doe Jason jdoe@hotmail.com $100.00 http://www.jdoe.com edit delete" [ref=e86]:
            - cell "Doe" [ref=e87]
            - cell "Jason" [ref=e88]
            - cell "jdoe@hotmail.com" [ref=e89]
            - cell "$100.00" [ref=e90]
            - cell "http://www.jdoe.com" [ref=e91]
            - cell "edit delete" [ref=e92]:
              - link "edit" [ref=e93]:
                - /url: "#edit"
              - link "delete" [ref=e94]:
                - /url: "#delete"
          - row "Conway Tim tconway@earthlink.net $50.00 http://www.timconway.com edit delete" [ref=e95]:
            - cell "Conway" [ref=e96]
            - cell "Tim" [ref=e97]
            - cell "tconway@earthlink.net" [ref=e98]
            - cell "$50.00" [ref=e99]
            - cell "http://www.timconway.com" [ref=e100]
            - cell "edit delete" [ref=e101]:
              - link "edit" [ref=e102]:
                - /url: "#edit"
              - link "delete" [ref=e103]:
                - /url: "#delete"
  - generic [ref=e105]:
    - separator [ref=e106]
    - generic [ref=e107]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e108]:
        - /url: http://elementalselenium.com/
```