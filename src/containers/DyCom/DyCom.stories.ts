import { http, HttpResponse } from 'msw';
import App from './DyCom';

export default {
  title: 'Demos/DyCom',
  component: App,
};
export const DyComButton = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://api.example.com/component-url', () => {
          return HttpResponse.text(`function Button({onClick}) {
                        return (
                          <button
                            style={{
                              color: "red",
                              fontSize: "20px",
                              backgroundColor: "blue",
                              padding: "10px",
                              border: "none",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                            onClick={onClick}
                          >
                            Click me
                          </button>
                        );
                      }`);
        }),
      ],
    },
  },
};
