import { CSSProperties } from 'react';

const nodeIconStyle: CSSProperties = {
  fontWeight: 'bold',
  stroke: 'none',
  fillRule: 'nonzero',
  fill: 'rgb(0%,0%,0%)',
  fillOpacity: 1
};

const TechnologyOverview = () => (
  <div className="flex flex-col flex-wrap items-center pb-8 pt-4">
    <h1 className="font-primary text-2xl pb-4 font-bold">
      Technologies in use
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-primary-1">
      <div className="px-2">
        <h2 className="font-primary text-lg font-semibold">Frontend</h2>
        <div className="flex items-center">
          <svg
            className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 512 512"
            width="16"
            height="16"
          >
            <path d="M468.43,116.47c-20.951-27.931-67.711-35.652-128.887-21.514-1.312-3.145-2.667-6.234-4.064-9.243a31.984,31.984,0,0,0-35.7-51.282C286.06,22.21,271.358,16,256,16c-17.639,0-34.385,8.137-49.772,24.185C193.338,53.627,182,72.04,172.455,94.955,111.279,80.819,64.52,88.54,43.571,116.469,19.742,148.233,33.374,200.092,79.938,256q-3.81,4.575-7.377,9.17a31.977,31.977,0,0,0-31.646,52.954c-12.76,31.346-11.878,58.02,2.655,77.4,14.094,18.789,39.858,28.436,73.84,28.435,16.534,0,35.021-2.293,55.045-6.921,9.543,22.915,20.883,41.329,33.773,54.771C221.615,487.863,238.361,496,256,496s34.385-8.137,49.772-24.185c12.888-13.441,24.227-31.851,33.77-54.763q6.419,1.483,12.679,2.652a32,32,0,0,0,63.075,2.965c23.9-3.246,42.2-12.549,53.133-27.138,23.828-31.763,10.2-83.622-36.365-139.531C478.627,200.09,492.257,148.232,468.43,116.47Zm-12.8,9.6c18.536,24.709,5.376,69.34-34.231,117.694a464.789,464.789,0,0,0-57.492-52.894c-3.758-29.113-10.125-56.789-18.577-80.817C398.238,98.253,439.125,104.066,455.63,126.071Zm-125.9,271.985a412.988,412.988,0,0,1-55.118-19.685,567.178,567.178,0,0,0,50.432-29.415q10.537-6.891,20.688-14.19A368.316,368.316,0,0,1,329.734,398.056Zm-147.468,0a368.421,368.421,0,0,1-16-63.291q10.128,7.275,20.689,14.19a566.986,566.986,0,0,0,50.432,29.416A413.069,413.069,0,0,1,182.266,398.056Zm0-284.112a412.988,412.988,0,0,1,55.118,19.685,567.178,567.178,0,0,0-50.432,29.415q-10.538,6.891-20.688,14.19A368.316,368.316,0,0,1,182.266,113.944Zm13.442,221.62c-11.216-7.334-22.14-15.059-32.532-22.988a505.5,505.5,0,0,1,0-113.152c10.392-7.929,21.317-15.655,32.532-22.989A544.9,544.9,0,0,1,256,142.216a544.7,544.7,0,0,1,60.292,34.22c11.216,7.334,22.14,15.059,32.532,22.988A501.517,501.517,0,0,1,352,256a501.451,501.451,0,0,1-3.176,56.576c-10.392,7.929-21.317,15.655-32.532,22.989A544.9,544.9,0,0,1,256,369.784,544.7,544.7,0,0,1,195.708,335.564Zm-49.965-36.889A431.841,431.841,0,0,1,101.111,256a432.351,432.351,0,0,1,44.633-42.68C144.594,227.363,144,241.648,144,256S144.594,284.632,145.743,298.675ZM329.734,113.944a368.421,368.421,0,0,1,16,63.291q-10.128-7.275-20.689-14.19a566.986,566.986,0,0,0-50.432-29.416A413.069,413.069,0,0,1,329.734,113.944Zm36.523,99.381A431.841,431.841,0,0,1,410.889,256a432.351,432.351,0,0,1-44.633,42.68C367.406,284.637,368,270.352,368,256S367.406,227.368,366.257,213.325ZM328,64a16,16,0,1,1-16-16A16.019,16.019,0,0,1,328,64ZM256,32c10.468,0,20.791,4.158,30.772,12.349a31.98,31.98,0,0,0,35.094,50.087q1.014,2.239,2,4.53A444.147,444.147,0,0,0,256,124.483a444.153,444.153,0,0,0-67.877-25.522C206.362,56.276,230.834,32,256,32ZM56.37,126.07c16.505-22,57.39-27.818,110.3-16.016-8.45,24.024-14.817,51.694-18.575,80.807a465.419,465.419,0,0,0-57.494,52.9C50.994,195.412,37.833,150.78,56.37,126.07ZM64,280a16,16,0,1,1-16,16A16.019,16.019,0,0,1,64,280ZM56.371,385.931c-12.957-17.282-8.8-40.6-1.618-59.3A31.985,31.985,0,0,0,86.53,273.3q1.99-2.535,4.069-5.068a464.756,464.756,0,0,0,57.494,52.9c3.758,29.113,10.125,56.789,18.577,80.817C113.763,413.748,72.876,407.934,56.371,385.931ZM256,480c-25.166,0-49.638-24.276-67.877-66.962A444.014,444.014,0,0,0,256,387.517a444.27,444.27,0,0,0,67.877,25.522C305.638,455.724,281.166,480,256,480Zm128-48a16,16,0,1,1,16-16A16.019,16.019,0,0,1,384,432Zm71.627-46.067c-8.1,10.81-22.207,17.886-41.033,20.686a32,32,0,0,0-60.183-2.79q-4.485-.852-9.08-1.885c8.45-24.023,14.816-51.693,18.574-80.805a465.329,465.329,0,0,0,57.494-52.9C461.006,316.588,474.166,361.22,455.627,385.933Z" />
            <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,112a48,48,0,1,1,48-48A48.055,48.055,0,0,1,256,304Z" />
          </svg>
          <p className="text-sm font-extralight">React JS</p>
        </div>
        <div className="flex items-center">
          <svg
            className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 512 512"
            width="16"
            height="16"
          >
            <g>
              <g>
                <path
                  d="M32,0l40.8,460.8L256,512l183.136-51.168L480,0H32z M392.768,150.688l-5.152,57.888l-15.52,173.568L256,414.208
              l-0.064,0.032l-116-32.128l-8.128-90.752h56.832l4.224,47.104l63.072,17.024l0.064-0.064l63.136-17.024l8.608-78.432
              l-198.656,0.544l-5.632-53.664l209.056-2.432l4.224-57.44l-218.88,0.608l-3.68-53.376H256h141.824L392.768,150.688z"
                />
              </g>
            </g>
          </svg>
          <p className="text-sm font-extralight">Tailwind CSS</p>
        </div>
      </div>
      <div className="px-2">
        <h2 className="font-primary text-lg font-semibold">Backend</h2>
        <div className="flex items-center">
          <svg
            className="mr-1"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="-38 1 511 511.999"
            height="16px"
            width="16px"
          >
            <g id="surface1">
              <path
                d="M 398.210938 316.699219 L 398.210938 231.394531 C 398.210938 227.1875 394.800781 223.773438 390.589844 223.773438 C 386.378906 223.773438 382.96875 227.1875 382.96875 231.394531 L 382.96875 316.699219 C 372.480469 318.484375 363.210938 323.886719 356.488281 331.578125 L 260.261719 272.78125 C 262.339844 267.585938 263.5 261.925781 263.5 256 C 263.5 250.074219 262.34375 244.417969 260.265625 239.222656 L 356.492188 180.425781 C 363.210938 188.113281 372.480469 193.511719 382.96875 195.300781 L 382.96875 205.988281 C 382.96875 210.199219 386.378906 213.609375 390.589844 213.609375 C 394.800781 213.609375 398.210938 210.199219 398.210938 205.988281 L 398.210938 195.300781 C 419.574219 191.664062 435.894531 173.035156 435.894531 150.652344 C 435.894531 125.671875 415.570312 105.347656 390.589844 105.347656 C 377.003906 105.347656 364.800781 111.371094 356.492188 120.878906 L 260.265625 62.078125 C 262.34375 56.886719 263.5 51.230469 263.5 45.304688 C 263.5 20.324219 243.175781 0 218.195312 0 C 193.21875 0 172.894531 20.324219 172.894531 45.304688 C 172.894531 51.230469 174.050781 56.890625 176.128906 62.082031 L 79.902344 120.875 C 71.589844 111.371094 59.390625 105.347656 45.800781 105.347656 C 20.824219 105.347656 0.5 125.671875 0.5 150.652344 C 0.5 173.03125 16.816406 191.660156 38.175781 195.300781 L 38.175781 316.699219 C 16.816406 320.339844 0.5 338.96875 0.5 361.347656 C 0.5 365.558594 3.910156 368.972656 8.121094 368.972656 C 12.332031 368.972656 15.742188 365.558594 15.742188 361.347656 C 15.742188 344.773438 29.226562 331.289062 45.800781 331.289062 C 62.378906 331.289062 75.863281 344.773438 75.863281 361.347656 C 75.863281 377.925781 62.375 391.410156 45.800781 391.410156 C 37.15625 391.410156 28.921875 387.679688 23.207031 381.175781 C 20.429688 378.011719 15.617188 377.703125 12.453125 380.480469 C 9.289062 383.257812 8.980469 388.074219 11.757812 391.238281 C 20.363281 401.035156 32.773438 406.652344 45.800781 406.652344 C 59.390625 406.652344 71.59375 400.628906 79.902344 391.121094 L 176.128906 449.914062 C 174.050781 455.109375 172.894531 460.769531 172.894531 466.695312 C 172.894531 491.675781 193.21875 512 218.195312 512 C 243.175781 512 263.5 491.675781 263.5 466.695312 C 263.5 460.769531 262.34375 455.109375 260.265625 449.917969 L 356.488281 391.121094 C 364.800781 400.625 377.003906 406.652344 390.589844 406.652344 C 415.570312 406.652344 435.894531 386.328125 435.894531 361.347656 C 435.894531 338.964844 419.574219 320.335938 398.210938 316.699219 Z M 218.195312 286.058594 C 201.621094 286.058594 188.136719 272.574219 188.136719 256 C 188.136719 239.425781 201.621094 225.9375 218.195312 225.9375 C 234.773438 225.9375 248.257812 239.425781 248.257812 256 C 248.257812 272.574219 234.769531 286.058594 218.195312 286.058594 Z M 390.589844 120.589844 C 407.167969 120.589844 420.652344 134.074219 420.652344 150.648438 C 420.652344 167.222656 407.164062 180.710938 390.589844 180.710938 C 374.015625 180.710938 360.53125 167.222656 360.53125 150.648438 C 360.53125 134.074219 374.015625 120.589844 390.589844 120.589844 Z M 348.523438 133.871094 C 346.445312 139.066406 345.289062 144.722656 345.289062 150.652344 C 345.289062 156.578125 346.445312 162.238281 348.523438 167.429688 L 252.300781 226.226562 C 245.578125 218.539062 236.308594 213.136719 225.820312 211.351562 L 225.820312 89.949219 C 236.308594 88.164062 245.578125 82.765625 252.300781 75.074219 Z M 218.195312 15.242188 C 234.773438 15.242188 248.257812 28.726562 248.257812 45.300781 C 248.257812 61.875 234.769531 75.363281 218.195312 75.363281 C 201.621094 75.363281 188.136719 61.875 188.136719 45.300781 C 188.136719 28.726562 201.621094 15.242188 218.195312 15.242188 Z M 184.097656 75.078125 C 190.816406 82.765625 200.085938 88.164062 210.574219 89.949219 L 210.574219 211.347656 C 200.085938 213.136719 190.816406 218.535156 184.09375 226.222656 L 87.867188 167.429688 C 89.945312 162.238281 91.101562 156.578125 91.101562 150.648438 C 91.101562 144.722656 89.945312 139.0625 87.867188 133.867188 Z M 15.742188 150.652344 C 15.742188 134.074219 29.226562 120.589844 45.800781 120.589844 C 62.375 120.589844 75.859375 134.074219 75.859375 150.652344 C 75.859375 167.226562 62.375 180.710938 45.800781 180.710938 C 29.226562 180.710938 15.742188 167.226562 15.742188 150.652344 Z M 53.417969 316.699219 L 53.417969 195.300781 C 63.910156 193.515625 73.175781 188.113281 79.898438 180.425781 L 176.128906 239.21875 C 174.050781 244.414062 172.894531 250.074219 172.894531 256 C 172.894531 261.925781 174.050781 267.589844 176.128906 272.78125 L 79.902344 331.574219 C 73.179688 323.886719 63.910156 318.484375 53.417969 316.699219 Z M 87.867188 378.125 C 89.945312 372.933594 91.105469 367.273438 91.105469 361.347656 C 91.105469 355.421875 89.949219 349.761719 87.871094 344.570312 L 184.097656 285.777344 C 190.820312 293.464844 200.085938 298.863281 210.574219 300.648438 L 210.574219 422.046875 C 200.085938 423.832031 190.820312 429.234375 184.097656 436.917969 Z M 218.195312 496.753906 C 201.621094 496.753906 188.136719 483.269531 188.136719 466.695312 C 188.136719 450.121094 201.621094 436.636719 218.195312 436.636719 C 234.773438 436.636719 248.257812 450.121094 248.257812 466.695312 C 248.257812 483.269531 234.769531 496.753906 218.195312 496.753906 Z M 252.296875 436.921875 C 245.574219 429.234375 236.308594 423.832031 225.820312 422.046875 L 225.820312 300.648438 C 236.308594 298.863281 245.574219 293.464844 252.296875 285.773438 L 348.523438 344.574219 C 346.445312 349.765625 345.289062 355.421875 345.289062 361.347656 C 345.289062 367.273438 346.445312 372.929688 348.523438 378.125 Z M 390.589844 391.40625 C 374.015625 391.40625 360.53125 377.921875 360.53125 361.347656 C 360.53125 344.773438 374.015625 331.289062 390.589844 331.289062 C 407.167969 331.289062 420.652344 344.773438 420.652344 361.347656 C 420.652344 377.921875 407.167969 391.40625 390.589844 391.40625 Z M 390.589844 391.40625 "
                style={nodeIconStyle}
              />
            </g>
          </svg>
          <p className="text-sm font-extralight">Node JS</p>
        </div>
      </div>
      <div className="px-2">
        <h2 className="font-primary text-lg font-semibold">Devops</h2>
        <div className="flex items-center">
          <svg
            className="mr-1"
            id="Layer_1"
            enable-background="new 0 0 512 512"
            viewBox="0 0 512 512"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g>
                <path d="m511.479 304.399c-2.893-21.969-17.081-39.406-29.04-46.31-13.99-8.078-26.92-3.764-33.525 4.096-7.648 9.102-7.44 22.093.506 31.591 4.271 5.106 2.615 9.875 1.247 12.262-2.126 3.712-7.147 7.623-14.272 6.427-3.969-.666-13.214-5.548-30.545-30.77-5.192-7.556-10.225-13.861-15.114-19.13 18.314-2.351 36.01-9.63 49.066-20.768 15.532-13.25 23.742-31.042 23.742-51.453 0-27.727-12.982-43.509-23.873-51.866-17.579-13.489-39.941-15.788-53.281-12.213-15.605 4.181-21.696 16.373-20.809 26.601 1.027 11.844 10.36 20.884 22.696 21.982 6.63.59 8.831 5.133 9.552 7.789 1.122 4.129.341 10.44-5.547 14.637-3.277 2.336-13.265 5.421-43.356-.159-4.379-.812-8.598-1.437-12.661-1.912-.588-4.708-1.717-9.452-3.535-14.187 6.684-4.945 10.522-11.512 11.455-19.677.867-7.583-.5-13.206-2.821-17.493 6.016-12.656 9.176-26.582 9.176-40.623 0-52.129-42.41-94.54-94.539-94.54s-94.539 42.411-94.539 94.54c0 14.038 3.161 27.965 9.176 40.621-2.322 4.288-3.688 9.911-2.822 17.495.933 8.166 4.772 14.734 11.457 19.679-1.817 4.735-2.943 9.477-3.53 14.185-4.066.476-8.287 1.101-12.668 1.913-30.09 5.581-40.079 2.494-43.355.16-5.889-4.198-6.669-10.509-5.548-14.638.722-2.655 2.922-7.198 9.553-7.789 12.335-1.098 21.668-10.138 22.695-21.982.887-10.228-5.204-22.42-20.81-26.601-13.337-3.574-35.701-1.276-53.281 12.213-10.891 8.357-23.873 24.139-23.873 51.866 0 20.412 8.21 38.204 23.742 51.453 13.057 11.138 30.751 18.418 49.066 20.768-4.888 5.269-9.922 11.574-15.114 19.13-17.331 25.221-26.576 30.104-30.545 30.77-7.133 1.194-12.146-2.714-14.272-6.427-1.368-2.388-3.025-7.156 1.247-12.262 7.946-9.499 8.154-22.489.506-31.591-6.605-7.86-19.533-12.174-33.525-4.096-11.958 6.904-26.147 24.341-29.04 46.31-1.792 13.61.188 33.95 19.794 53.557 13.039 13.039 29.303 19.828 47.33 19.828 1.927 0 3.875-.078 5.84-.234 25.683-2.036 52.611-17.61 68.603-39.677 6.666-9.198 12.887-16.474 18.641-21.821-4.198 13.698-5.815 31.758-1.108 57.138 6.49 35.001 2.746 46.841-.063 50.783-5.244 7.358-13.155 8.326-18.338 6.917-2.744-.745-9.21-3.428-9.993-12.221-1.194-13.417-11.006-23.565-23.859-24.679-11.107-.965-24.371 5.703-28.943 22.766-4.145 15.471-1.855 40.919 12.967 60.235 9.215 12.01 26.938 26.325 59.04 26.325 26.311 0 48.144-11.063 63.141-31.995 3.217-4.489 2.185-10.736-2.305-13.953-4.488-3.217-10.736-2.186-13.953 2.305-11.241 15.688-27.014 23.643-46.883 23.643-19.228 0-33.753-6.225-43.173-18.5-11.423-14.886-11.949-33.802-9.516-42.883 1.428-5.326 4.394-8.318 7.896-8.018 2.364.205 5.267 2.037 5.667 6.527 1.296 14.568 10.75 25.967 24.671 29.749 14.992 4.071 30.64-1.663 39.867-14.609 8.493-11.917 9.586-32.9 3.442-66.038-7.759-41.845 3.283-57.319 13.961-72.285 4.468-6.262 9.088-12.737 11.854-20.662 4.207-12.054.363-25.673-3.708-40.092-4.496-15.927-9.122-32.331-3.758-47.469 3.591.886 7.495 1.59 11.722 2.102 5.782.7 7.719 3.079 8.952 5.545 1.751 3.505 5.284 5.532 8.953 5.532 1.502 0 3.027-.34 4.462-1.057 4.94-2.469 6.944-8.475 4.475-13.416-4.698-9.401-13.149-15.094-24.438-16.46-15.26-1.848-23.36-5.957-24.075-12.214-.668-5.841.823-6.868 5.762-10.268 5.372-3.698 14.362-9.887 12.435-23.903-.752-5.471-5.8-9.296-11.269-8.544-5.471.752-9.297 5.797-8.544 11.269.083.604.134 1.006.004 1.388-3.032-8.234-4.613-16.982-4.613-25.786 0-41.102 33.438-74.54 74.539-74.54s74.539 33.438 74.539 74.54c0 8.806-1.58 17.554-4.613 25.788-.13-.383-.08-.785.003-1.389.752-5.472-3.073-10.517-8.544-11.269-5.47-.75-10.517 3.073-11.269 8.544-1.927 14.016 7.063 20.206 12.435 23.903 4.939 3.4 6.43 4.427 5.762 10.268-.715 6.257-8.815 10.366-24.075 12.214-11.29 1.367-19.741 7.059-24.439 16.46-2.469 4.94-.465 10.947 4.475 13.416 1.436.717 2.96 1.057 4.462 1.057 3.669 0 7.202-2.027 8.953-5.532 1.232-2.467 3.17-4.846 8.952-5.545 4.228-.512 8.132-1.216 11.724-2.102 5.364 15.141.735 31.542-3.761 47.47-4.07 14.418-7.914 28.038-3.707 40.092 2.766 7.925 7.386 14.4 11.854 20.662 10.679 14.965 21.72 30.44 13.961 72.285-6.145 33.137-5.051 54.121 3.442 66.038 9.227 12.946 24.874 18.683 39.867 14.609 13.921-3.781 23.375-15.18 24.671-29.749.4-4.49 3.302-6.323 5.667-6.527 3.523-.301 6.469 2.691 7.896 8.018 2.433 9.082 1.907 27.997-9.516 42.883-9.419 12.276-23.945 18.5-43.173 18.5-17.929 0-32.588-6.527-43.57-19.401-16.82-19.717-20.971-49.706-17.623-70.68 5.869-36.767 2.889-60.588-9.376-74.966-8.105-9.501-19.88-14.318-35-14.318-14.694 0-26.244 4.56-34.327 13.552-11.134 12.386-15.022 32.692-11.885 62.077.586 5.492 5.507 9.475 11.005 8.882 5.492-.586 9.468-5.513 8.882-11.005-2.465-23.095-.153-38.769 6.872-46.584 4.187-4.658 10.55-6.922 19.453-6.922 9.124 0 15.595 2.387 19.784 7.298 7.956 9.326 9.585 29.121 4.842 58.834-4.969 31.132 3.728 65.208 22.157 86.812 14.745 17.285 35.073 26.421 58.786 26.421 32.102 0 49.825-14.315 59.04-26.325 14.822-19.316 17.112-44.765 12.967-60.235-4.572-17.064-17.832-23.733-28.943-22.766-12.854 1.114-22.665 11.263-23.859 24.679-.783 8.793-7.25 11.476-9.993 12.221-5.181 1.407-13.094.441-18.337-6.916-2.81-3.942-6.554-15.782-.064-50.783 4.706-25.38 3.09-43.44-1.108-57.138 5.754 5.347 11.976 12.623 18.641 21.821 15.992 22.066 42.92 37.641 68.603 39.677 1.966.156 3.913.234 5.84.234 18.025 0 34.291-6.79 47.33-19.828 19.609-19.611 21.588-39.95 19.796-53.561zm-443.024-114.054c0-15.716 5.399-27.827 16.048-35.999 11.537-8.853 27.123-11.122 35.93-8.762 4.003 1.073 6.269 3.149 6.06 5.555-.143 1.649-1.412 3.51-4.543 3.789-13.26 1.18-23.636 9.789-27.081 22.467-3.695 13.604 1.502 27.8 13.241 36.167 10.846 7.73 28.922 8.723 58.609 3.219 3.208-.595 6.312-1.083 9.308-1.474.987 7.354 2.747 14.449 4.571 21.098-10.038-.143-20.682.528-32.162 5.669-.939.14-1.874.274-2.827.427-17.516 2.795-42.994-1.042-60.433-15.919-11.095-9.465-16.721-21.657-16.721-36.237zm57.438 135.792c-10.408 14.361-31.139 29.664-53.99 31.476-14.535 1.155-27.137-3.49-37.446-13.799-11.113-11.113-15.859-23.496-14.107-36.804 1.898-14.417 11.314-27.042 19.21-31.601 3.59-2.072 6.661-2.205 8.213-.357 1.064 1.267 1.483 3.479-.535 5.891-8.542 10.211-9.791 23.636-3.261 35.036 7.007 12.232 20.721 18.596 34.936 16.211 13.137-2.204 26.621-14.283 43.72-39.167 25.591-37.243 43.14-37.135 63.273-36.475 1.097 5.421 1.475 10.125.311 13.458-1.788 5.121-5.133 9.861-9.016 15.305-16.259 2.03-32.693 15.139-51.308 40.826zm277.996-112.575c11.738-8.367 16.936-22.563 13.24-36.167-3.444-12.678-13.821-21.287-27.08-22.467-3.132-.279-4.4-2.14-4.543-3.789-.208-2.405 2.057-4.482 6.06-5.555 8.808-2.359 24.393-.091 35.93 8.762 10.649 8.171 16.048 20.283 16.048 35.999 0 14.58-5.626 26.772-16.722 36.237-17.439 14.877-42.917 18.716-60.433 15.919-.953-.152-1.887-.287-2.825-.426-11.481-5.143-22.126-5.814-32.164-5.67 1.825-6.651 3.587-13.745 4.574-21.097 2.994.391 6.098.879 9.305 1.474 29.688 5.504 47.763 4.511 58.61-3.22zm73.654 130.252c-10.309 10.31-22.91 14.95-37.446 13.799-22.851-1.812-43.582-17.114-53.99-31.476-18.615-25.688-35.047-38.799-51.309-40.827-3.884-5.444-7.229-10.183-9.016-15.304-1.164-3.333-.786-8.038.311-13.458 20.131-.661 37.682-.767 63.274 36.475 17.099 24.884 30.583 36.963 43.72 39.167 14.22 2.382 27.93-3.979 34.936-16.211 6.53-11.4 5.28-24.825-3.262-35.036-2.017-2.412-1.599-4.625-.534-5.891 1.553-1.849 4.624-1.715 8.213.357 7.896 4.559 17.312 17.183 19.21 31.601 1.752 13.308-2.994 25.691-14.107 36.804z" />
                <path d="m221.575 413.478h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10 10-4.477 10-10-4.477-10-10-10z" />
                <path d="m238.287 261.87c1.25 0 2.523-.237 3.753-.735 5.119-2.074 7.586-7.906 5.511-13.024l-2.128-5.25c-2.075-5.118-7.907-7.586-13.024-5.511-5.119 2.074-7.586 7.906-5.511 13.024l2.128 5.25c1.576 3.888 5.319 6.246 9.271 6.246z" />
                <path d="m273.712 261.87c3.952 0 7.695-2.359 9.271-6.247l2.128-5.25c2.075-5.118-.393-10.95-5.511-13.024-5.12-2.077-10.95.393-13.024 5.511l-2.128 5.25c-2.075 5.118.393 10.95 5.511 13.024 1.231.5 2.502.736 3.753.736z" />
              </g>
            </g>
          </svg>
          <p className="text-sm font-extralight">Docker</p>
        </div>
      </div>
    </div>
  </div>
);

export default TechnologyOverview;
